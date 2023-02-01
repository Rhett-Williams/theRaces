import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLazyGetRacesQuery } from '../services/races'
import RacesCard from '../components/RacesCard'
import moment from 'moment'
import { Types } from '../utils/Types'
import CategoryHeader from '../components/CategoryHeader'
import { categories } from '../utils/Arrays'


const Home = () => {
  const [getRacesData] = useLazyGetRacesQuery()
  const [displayRaces, setDisplayRaces] = useState<(Types.Summary | undefined)[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Types.Category[]>(categories)

  useEffect(() => {
    formatDisplayRaceData()
  },[selectedCategories])

  const formatDisplayRaceData = async () => {
    try {
      const racesData = await getRacesData().unwrap()
      if (!racesData) return
      const raceSummaries = racesData?.data.race_summaries
      const raceIds = racesData.data.next_to_go_ids
      const racesArray = [...Array(10)].map((_, index) => {
        if (!raceIds[index] || !raceSummaries[raceIds[index]]) return
        if (-moment().diff(moment(raceSummaries[raceIds[index]].advertised_start.seconds * 1000), 'seconds') <= -60) return
        return raceSummaries[raceIds[index]]
      })
      // The filtering based on category would be easier if there was a category prop which could be passed to the backend
      const selectedCategoriesIds = selectedCategories.map(category => {return category.id})
      const categoySortedRacesArray = racesArray.filter(raceSummary => selectedCategoriesIds.includes(raceSummary?.category_id))
      const sortedRacesArray = categoySortedRacesArray.sort((a, b) => (a?.advertised_start.seconds ?? 0) - (b?.advertised_start.seconds ?? 0))
      const filteredRaceArray = sortedRacesArray.filter((raceSummary) => raceSummary !== undefined)
      setDisplayRaces([...filteredRaceArray])
    } catch (error) {
      console.log("error", error)
    }
  }

  const renderRaces = () => {
    if (displayRaces.length === 0) return
    return displayRaces.map((race, index) => {
      if (index > 4) return
      if (!race) return
      return (
        <RacesCard
          onMinimumTimeReached={formatDisplayRaceData}
          key={index}
          race={race}/>
      )
    })
  }

  const categorySelecAction = (selectedCategory: Types.Category, isRemoveFromList: boolean) => {
    if (isRemoveFromList){
      console.log("this one going?")
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
        {renderRaces()}

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
    }
})