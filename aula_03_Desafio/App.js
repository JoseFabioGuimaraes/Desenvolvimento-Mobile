import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App