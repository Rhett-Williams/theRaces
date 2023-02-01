import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetRacesQuery, useInvalidateRacesMutation, useLazyGetRacesQuery } from '../services/races'
import RacesCard from '../components/RacesCard'
import moment from 'moment'
import { Types } from '../utils/Types'


const Home = () => {
  const [getRacesData, {data}] = useLazyGetRacesQuery()
  const [invalidateRaces] = useInvalidateRacesMutation()
  const [displayRaces, setDisplayRaces] = useState<Types.Summary[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    formatDisplayRaceData()
  },[])

  const formatDisplayRaceData = async () => {
    // setIsLoading(true)
    try {
      const racesData = await getRacesData().unwrap()
      console.log("the rac", racesData?.data.race_summaries[racesData.data.next_to_go_ids[1]].category_id)
      if (!racesData) return
      const raceSummaries = racesData?.data.race_summaries
      const raceIds = racesData.data.next_to_go_ids
      const racesArray = [...Array(10)].map((_, index) => {
        if (!raceIds[index] || !raceSummaries[raceIds[index]]) return
        if (-moment().diff(moment(raceSummaries[raceIds[index]].advertised_start.seconds * 1000), 'seconds') <= -60) return
        return raceSummaries[raceIds[index]]
      })
      const sortedRacesArray = racesArray.sort((a, b) => (a?.advertised_start.seconds ?? 0) - (b?.advertised_start.seconds ?? 0))
      const filteredRaceArray = sortedRacesArray.filter((raceSummary, b) => raceSummary !== undefined)
      setDisplayRaces([...filteredRaceArray])
    } catch (error) {
      console.log("error", error)
    }
    // setIsLoading(false)
  }

  const renderRaces = () => {
    if (displayRaces.length === 0) return
    return displayRaces.map((race, index) => {
      if (index > 4) return
      return (
        <RacesCard
          onMinimumTimeReached={formatDisplayRaceData}
          key={index}
          race={race}/>
      )
    })
  }

// console.log("gamm", racesData?.data.next_to_go_ids)
//   console.log("akjsdhbajksd", JSON.stringify(racesData?.data.race_summaries[racesData.data.next_to_go_ids[1]].category_id, null, 2))

  return (
    <SafeAreaView
      style={{backgroundColor: 'green', flex: 1}}
      >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Next to go:</Text>
        </View>
        {!isLoading && renderRaces()}
        <Text>{displayRaces[0]?.race_id}</Text>
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