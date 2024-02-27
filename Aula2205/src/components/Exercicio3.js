import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState("")

    return (
    <View>
      <TextInput
      value={texto}
      onChangeText={setTexto}
      placeholder='Digite algo aqui'
      />
      <Text>Você está digitando: {texto}</Text>
    </View>
  )
}

export default Exercicio3