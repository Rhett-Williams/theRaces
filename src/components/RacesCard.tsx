import { StyleSheet, Text, View,  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Types } from '../utils/Types'
import moment from 'moment'
import { useTimer } from '../utils/useTimer'
import { useInvalidateRacesMutation } from '../services/races'

type Props = {
    race: Types.Summary
    onMinimumTimeReached: () => void
    
}

const RacesCard = ({race, onMinimumTimeReached}: Props) => {
    const [timer, setTimer] = useTimer({time: moment(race.advertised_start.seconds * 1000), minimumTime: -60, onMinimumTimeReached})

    useEffect(() => {
        setTimer(-moment().diff(moment(race.advertised_start.seconds * 1000), 'seconds'))
    },[race])

    return (
        <View>
            <Text>{timer.toString()}</Text>
            <Text>{race.race_id}</Text>
        </View>
    )
}

export default RacesCard

const styles = StyleSheet.create({})