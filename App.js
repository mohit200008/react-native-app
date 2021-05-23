import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName]= useState('shaun');
  const [person,setPerson]= useState({ name: 'mario' , age: 30});

  const clickHandle= () => {
    setName('chus-li');
    setPerson({ name: 'lulli' , age: '55'});
  }

  return (
    <View style={styles.container}>
      <Text> My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandle}/>
      </View>
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
  buttonContainer: {
    marginTop: 20
  }
});
