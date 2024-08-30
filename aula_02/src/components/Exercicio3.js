import { View, StyleSheet } from 'react-native';
import React from 'react';

const Exercicio3 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: 50 }, { backgroundColor: 'blue' }]} />
      <View style={[styles.flexBox, { backgroundColor: 'black' }]} />
      <View style={[styles.box, { width: 50 }, { backgroundColor: 'tomato' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
  },
  box: {
    height: '100%',
  },
  flexBox: {
    flex: 1,
  },
});

export default Exercicio3;

//Testar se todas as cores estão funcionando 