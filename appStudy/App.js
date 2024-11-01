import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CartoesEstudoProvider } from './src/contexts/CartoesEstudoContext'
import EdicaoCartaoScreen from './src/screens/EdicaoCartaoScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <CartoesEstudoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EdicaoCartao">
          <Stack.Screen name="EdicaoCartao" component={EdicaoCartaoScreen} options={{ title: 'Editar Cartão' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartoesEstudoProvider>
  )
}

export default App