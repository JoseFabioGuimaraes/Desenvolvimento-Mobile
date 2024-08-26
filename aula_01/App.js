import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Exercicio1 from './src/components/Exercicio1'
import Exercicio2 from './src/components/Exercicio2'
import Exercicio3 from './src/components/Exercicio3'
import Exercicio4 from './src/components/Exercicio4'

const App = () => {
  return (
    <View style={styles.container}>
      <Exercicio1 nome = "Fábio" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App