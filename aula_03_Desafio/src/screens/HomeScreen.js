import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {

    const users = [
        { id: 1, name: 'John Doe', age: 30, gender: 'male' },
        { id: 2, name: 'Jane Doe', age: 25, gender: 'female' }
    ]

  return (
    <View style={styles.container}>
      { /* Falta o onPress */
        users.map((user) => (
            <TouchableOpacity
                key={user.id}
                style={styles.userCard}
                onPress={() => navigation.navigate('Details', { user })}
                >
                    <Text style={styles.userName}>
                        {user.name}
                    </Text>
                </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    userCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontSize: 18,
    }
  });

export default HomeScreen