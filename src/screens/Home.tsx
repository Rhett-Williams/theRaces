import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetRacesQuery } from '../services/races'



const Home = () => {
  const {data: racesData} = useGetRacesQuery()

  return (
    <SafeAreaView
        edges={['top']}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                  <Text>gammin</Text>
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
    header: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'black'
    },
    headerContainer: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    notesContainer: {
      backgroundColor: '#dedcdc',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    noteContent: {

    }
})