import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio3 = () => {
    const [texto, setTexto] = useState("")
  return (
    <View style={styles.container}>
        <TextInput
            value = {texto}
            onChangeText = {setTexto}
            placeholder = 'Digite algo aqui'
        />
        <Text>Você está digitando: {texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default Exercicio3