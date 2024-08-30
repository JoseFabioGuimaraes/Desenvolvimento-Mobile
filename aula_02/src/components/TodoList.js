import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
  const [tarefa, setTarefa] = useState("")
  const [tarefasList, setTarefasList] = useState([])
  
  const adicionaTarefa = () => {
    if (tarefa !== "") {
      setTarefasList([...tarefasList, tarefa])
      setTarefa("")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MINHA LISTA TODO</Text>
      <TextInput
        style={styles.input}
        value={tarefa}
        onChangeText={setTarefa}
        placeholder='Digite a sua proxima tarefa'
      />
      <Button title="Adicionar Tarefa" onPress={adicionaTarefa} />
      
      <Text style={styles.listTitle}>Lista de Tarefas</Text>
      
      <View style={styles.listContainer}>
        {
          tarefasList.map((item, index) => (
            <Text key={index} style={styles.listItem}>{item}</Text>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adiciona um pouco de espaço no topo
  },
  titulo:{ 
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:100,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20, // Espaçamento entre o TextInput e o Button
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  listTitle: {
    marginTop: 30, // Espaçamento entre o Button e o título da lista
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 10, // Espaçamento entre o título da lista e os itens da lista
    width: '80%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
})

export default TodoList