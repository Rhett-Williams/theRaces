import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectButton from './SelectButton'
import { Types } from '../utils/Types'
import { categories } from '../utils/Arrays'
import { getCategoryImage } from '../utils/getCategoryImage'

type Props = {
    selectedCategories: Types.Category[]
    onSelect: (category: Types.Category, isRemoveFromList: boolean) => void
}
const CategoryHeader = ({selectedCategories, onSelect}: Props) => {

    const renderCategories = () => {
        return categories.map((category, index) => {
            const isSelected = selectedCategories.includes(category)
            return (
            <TouchableOpacity
                style={styles.categoryContainer}
                key={index}
                onPress={() => onSelect(category, isSelected)}>
                <SelectButton
                    isSelected={isSelected}/>
                {getCategoryImage({category: category.id})}
            </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.mainContainer}>
            {renderCategories()}
        </View>
    )
}

export default CategoryHeader

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
    }
})