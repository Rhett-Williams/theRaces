import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetRacesQuery, useInvalidateRacesMutation } from '../services/races'
import RacesCard from '../components/RacesCard'
import moment from 'moment'
import { Types } from '../utils/Types'
import CategoryHeader from '../components/CategoryHeader'
import { categories } from '../utils/Arrays'
import { useEntainDispatch } from '../redux/store'
import { displaySnackbar } from '../redux/appSlice'

const Home = () => {
  const {data: racesData, error} = useGetRacesQuery()
  const [invalidateRacesData] = useInvalidateRacesMutation()
  const [displayRaces, setDisplayRaces] = useState<(Types.Summary | undefined)[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Types.Category[]>(categories)
  const dispatch = useEntainDispatch()

  useEffect(() => {
    if (error){
      console.log("error getting data", error)
      dispatch(displaySnackbar(true))
    }
  },[error])

  useEffect(() => {
    formatDisplayRaceData()
  },[selectedCategories, racesData])

  const formatDisplayRaceData = async () => {
      if (!racesData) return
      const raceSummaries = racesData?.data.race_summaries
      const raceIds = racesData.data.next_to_go_ids
      const racesArray = [...Array(10)].map((_, index) => {
        if (!raceIds[index] || !raceSummaries[raceIds[index]]) return
        if (-moment().diff(moment(raceSummaries[raceIds[index]].advertised_start.seconds * 1000), 'seconds') <= -60) return
        return raceSummaries[raceIds[index]]
      })
      // The filtering based on category would be easier if there was a category prop which could be passed to the backend
      // or pagination for if there is not 5 of the selected category races in the next 10 races allowing the api to skip until there is
      const selectedCategoriesIds = selectedCategories.map(category => {return category.id})
      const categoySortedRacesArray = racesArray.filter(raceSummary => selectedCategoriesIds.includes(raceSummary?.category_id ?? ""))
      const sortedRacesArray = categoySortedRacesArray.sort((a, b) => (a?.advertised_start.seconds ?? 0) - (b?.advertised_start.seconds ?? 0))
      const filteredRaceArray = sortedRacesArray.filter((raceSummary) => raceSummary !== undefined)
      setDisplayRaces([...filteredRaceArray])
  }

  const renderRaces = () => {
    if (displayRaces.length === 0) return
    return displayRaces.map((race, index) => {
      if (index > 4) return
      if (!race) return
      return (
        <RacesCard
          onMinimumTimeReached={invalidateRacesData}
          key={index}
          race={race}/>
      )
    })
  }

  const categorySelecAction = (selectedCategory: Types.Category, isRemoveFromList: boolean) => {
    if (isRemoveFromList){
      setSelectedCategories([...selectedCategories.filter(category => category.id !== selectedCategory.id)])
    } else {
      setSelectedCategories([...selectedCategories, selectedCategory])
    }
  }

  return (
    <SafeAreaView
      style={{backgroundColor: '#d32123', flex: 1}}
      >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Next to go:</Text>
        </View>
        <CategoryHeader
          onSelect={categorySelecAction}
          selectedCategories={selectedCategories}/>
        <View style={styles.racesContainer}>
          {renderRaces()}
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
      marginHorizontal: 15,
      marginTop: 50
    },
    headerContainer: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
    },
    racesContainer: {
      marginTop: 10,
      backgroundColor: 'white',
      paddingHorizontal: 8,
      borderRadius: 10
    }
})