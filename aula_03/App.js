import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  )
}

export default App