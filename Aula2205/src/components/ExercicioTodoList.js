import { View, Text, TextInput, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const ExercicioTodoList = () => {
    const [task, setTask] = useState()
    const [taskList, setTaskList] = useState([])

    function addTask(){
        if(task.trim().length > 0){
            setTaskList([...taskList,task])
            setTask('')
        }
    }
  return (
      <View sytle={styles.container}>
          <View sytle={styles.header}/>
          <Text style={styles.headerText}>Lista de Tarefas: </Text>
      
          <View style={styles.inputContainer}>
              <TextInput
                  style = {styles.input}
                  placeholder="Adicione uma nova tarefa..."
                  value={task}
                  onChangeText={setTask}
              />
              <Button title="Adicionar" />
          </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    header: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
    },
    input: {
      flex: 1,
      borderBottomWidth: 1,
      marginRight: 10,
    },
    taskList: {
      flex: 1,
      paddingTop: 20,
    },
    task: {
      backgroundColor: '#eee',
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
  });

export default ExercicioTodoList