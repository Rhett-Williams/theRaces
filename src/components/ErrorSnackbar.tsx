import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useEntainDispatch, useEntainSelector } from '../redux/store'
import { displaySnackbar, getSnackbarState } from '../redux/appSlice'

const ErrorSnackbar = () => {
    const isVisible = useEntainSelector(getSnackbarState)
    const dispatch = useEntainDispatch()

    
    useEffect(() => {
        if (isVisible){
            setTimeout(() => dispatch(displaySnackbar(false)), 5000)
        }
    },[isVisible])

    return (
    <>
        {isVisible && <View style={styles.mainContainer}>
            <Text style={{fontSize: 20}}>Error getting data</Text>
        </View>}
    </>
  )
}

export default ErrorSnackbar

const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 50,
        position: 'absolute',
        zIndex: 10,
        alignSelf: 'center',
        top: 30,
        paddingHorizontal: 8,
        borderWidth: 1
    }
})