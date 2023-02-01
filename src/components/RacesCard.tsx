import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Types } from '../utils/Types'
import moment from 'moment'

type Props = {
    race: Types.Summary
}

const RacesCard = ({race}: Props) => {
    var raceTime = moment(race.advertised_start.seconds * 1000)

    return (
        <View>
            <Text>{raceTime.toString()}</Text>
        </View>
    )
}

export default RacesCard

const styles = StyleSheet.create({})