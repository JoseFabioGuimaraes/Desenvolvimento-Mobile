import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const DetailsScreens = ({route}) => {

    const {user} = route.params

    const profileImage = user.gender === 'male' ? require('../../assets/profile_man.png') 
    : require('../../assets/profile_woman.png')

  return (
    <View style={styles.container}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.name}>Name: {user.name}</Text>
        <Text style={styles.detail}>Age: {user.age}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50, // para tornar a imagem redonda
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    detail: {
      fontSize: 16,
    }
  });

export default DetailsScreens