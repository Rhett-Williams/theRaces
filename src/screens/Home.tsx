import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetRacesQuery } from '../services/races'
import RacesCard from '../components/RacesCard'



const Home = () => {
  const {data: racesData} = useGetRacesQuery(5)

  const renderRaces = () => {
    if (!racesData) return
    const raceSummaries = racesData?.data.race_summaries
    const raceIds = racesData.data.next_to_go_ids

    const racesArray = [...Array(5)].map((_, index) => {
      if (!raceIds[index] || !raceSummaries[raceIds[index]]) return
      return raceSummaries[raceIds[index]]
    })

    const sortedRacesArray = racesArray.sort((a, b) => (a?.advertised_start.seconds ?? 0) - (b?.advertised_start.seconds ?? 0))
    return sortedRacesArray.map((race, index) => {
      if (!race) return
      return (
        <RacesCard
          key={index}
          race={race}/>
      )
    })
  }
console.log("gamm", racesData?.data.next_to_go_ids)
  console.log("akjsdhbajksd", JSON.stringify(racesData?.data.race_summaries[racesData.data.next_to_go_ids[1]].category_id, null, 2))

  return (
    <SafeAreaView
      style={{backgroundColor: 'green', flex: 1}}
      >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Next to go:</Text>
        </View>
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