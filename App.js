import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName]= useState('shaun');
  const [age,setAge]= useState('25');



  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput style={styles.input} multiline placeholder="eg John Snow" onChangeText={(val) => setName(val)}/>
      <Text>Enter your age:</Text>
      <TextInput style={styles.input} placeholder="eg 55" keyboardType="numeric" onChangeText={(val)=> setAge(val)}/>
      
      <Text>name: {name} age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    borderWidth: 1,
    borderColor: 'crimson',
    padding: 8,
    margin:10,
    width: 200
  }
});
