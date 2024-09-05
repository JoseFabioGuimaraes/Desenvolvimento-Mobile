import { View, Text } from 'react-native'
import React from 'react'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const AppNavigation = () => {

    //inicializa o Stack Navigation
    const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Details" component={DetailsScreen}/>
    </Stack.Navigator>
  )
}

export default AppNavigation