import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Exercicio1 from './src/components/Exercicio1'
import Exercicio2 from './src/components/Exercicio2'
import Exercicio3 from './src/components/Exercicio3'
import Exercicio4 from './src/components/Exercicio4'
import TodoList from './src/components/TodoList'

const App = () => {
  return (  
    <View style={styles.container}>
      <TodoList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App