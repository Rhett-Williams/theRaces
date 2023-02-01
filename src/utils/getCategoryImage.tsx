import { Types } from "./Types"
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native'
import GreyhoundCategoryIcon from "../../assets/icons/GreyhoundCategoryIcon"
import HorseCategoryIcon from "../../assets/icons/HorseCategoryIcon"
import HarnessCategoryIcon from "../../assets/icons/HarnessCategoryIcon"

type Props = {
    category: Types.Category["id"],
    style?: StyleProp<ViewStyle>
}

export const getCategoryImage = ({category, style}: Props) => {
    switch(category){
        case "9daef0d7-bf3c-4f50-921d-8e818c60fe61": return <View style={[styles.mainContainer, style]}><GreyhoundCategoryIcon/></View>
        case "4a2788f8-e825-4d36-9894-efd4baf1cfae": return <View style={[styles.mainContainer, style]}><HorseCategoryIcon/></View>
        case "161d9be2-e909-4326-8c2c-35ed71fb460b": return <View style={[styles.mainContainer, style]}><HarnessCategoryIcon/></View>
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 50,
        height: 50,
        overflow: 'hidden'
    }
})