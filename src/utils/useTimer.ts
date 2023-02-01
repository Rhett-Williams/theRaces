import React, {useState, useEffect, Dispatch} from 'react'
import moment, {Moment} from 'moment'
import { diff } from 'react-native-reanimated';

type Props = {
    time: Moment
    minimumTime: number
    onMinimumTimeReached: () => void
}
export function useTimer({minimumTime, onMinimumTimeReached}: Props): [number, React.Dispatch<React.SetStateAction<number>>]{
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
    const interval = setInterval(() => {
        setTimer(timer => timer-1);
    }, 1000);
    return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (timer === minimumTime){
            onMinimumTimeReached()
        }
    },[timer])

    return [
        timer,
        setTimer
    ]

}