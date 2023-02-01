import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    isSelected: boolean
}
const SelectButton = ({isSelected}: Props) => {

    return (
        <View
            style={
                [
                    styles.mainButton,
                    {
                        backgroundColor: isSelected ? 'blue' : '#d32123'
                    }
                ]
            }/>

    )
}

export default SelectButton

const styles = StyleSheet.create({
    mainButton: {
        width: 15,
        height: 15,
        borderRadius: 7.5, 
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 5
    }
})