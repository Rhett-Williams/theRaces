import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import HorseCategoryIcon from '../../assets/icons/HorseCategoryIcon'
import SelectButton from './SelectButton'
import { Types } from '../utils/Types'
import { categories } from '../utils/Arrays'
import GreyhoundCategoryIcon from '../../assets/icons/GreyhoundCategoryIcon'
import HarnessCategoryIcon from '../../assets/icons/HarnessCategoryIcon'

type Props = {
    selectedCategories: Types.Category[]
    onSelect: (category: Types.Category, isRemoveFromList: boolean) => void
}
const CategoryHeader = ({selectedCategories, onSelect}: Props) => {

    const getCategoryImage = (category: Types.Category) => {
        switch(category.name){
            case "Greyhound": return <View style={{width: 50, height: 50}}><GreyhoundCategoryIcon/></View>
            case "Horse": return <View style={{width: 50, height: 50}}><HorseCategoryIcon/></View>
            case "Harness": return <View style={{width: 50, height: 50}}><HarnessCategoryIcon/></View>
        }
    }

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
                {getCategoryImage(category)}
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