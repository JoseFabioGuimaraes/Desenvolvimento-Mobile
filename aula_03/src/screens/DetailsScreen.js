import { View, Text } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route, navigation}) => {
    
    const { itemId, otherParam } = route.params;
  
    return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Text>Item ID: {itemId}</Text> 
        <Text>Other Param: {otherParam}</Text>
    </View>
  )
}

export default DetailsScreen