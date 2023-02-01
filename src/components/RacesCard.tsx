import { StyleSheet, Text, View,  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Types } from '../utils/Types'
import moment from 'moment'
import { useTimer } from '../utils/useTimer'
import { getCategoryImage } from '../utils/getCategoryImage'
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated'

type Props = {
    race: Types.Summary
    onMinimumTimeReached: () => void
}

const RacesCard = ({race, onMinimumTimeReached}: Props) => {
    const [timer, setTimer] = useTimer({time: moment(race.advertised_start.seconds * 1000), minimumTime: -60, onMinimumTimeReached})

    useEffect(() => {
        setTimer(-moment().diff(moment(race.advertised_start.seconds * 1000), 'seconds'))
    },[race])

    const parseTime = (): string => {
        if (timer <= 60){
            return timer.toString()
        }
        return `${Math.floor(timer / 60).toString()}m`
    }

    return (
        <Animated.View
            exiting={SlideOutLeft.duration(300)}
            entering={SlideInLeft.duration(300)}
            style={styles.mainContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {getCategoryImage({category: race.category_id, style: {width: 25, height: 25}})}
                <View style={{marginLeft: 10, width: '80%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>{race.meeting_name} </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>R{race.race_number}</Text>
                    </View>
                    <Text style={styles.text}>{race.venue_state} &#x2022; {race.race_form.distance}m</Text>
                </View>
            </View>

            <Text>{parseTime()}</Text>
        </Animated.View>
    )
}

export default RacesCard

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    },
    text: {
        fontSize: 20
    }
})