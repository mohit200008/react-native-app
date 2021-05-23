import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum <Text>odor dunu</Text> jnrj</Text>
        <Text>Lorem ipsum odor dunu jnrj</Text>
        <Text>Lorem ipsum odor dunu jnrj</Text>
      
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
  header : {
    backgroundColor: 'darkblue',
    padding: 35,
    borderRadius: 25,

  },
  boldText : {
    fontWeight: 'bold',
    color:'red',
  },
  body : {
    backgroundColor: 'yellow',
    padding:25,
    borderRadius:25
  }
});
