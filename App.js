import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
    { name: 'shaun', key: '1'},
    { name: 'yashi', key: '2'},
    { name: 'isha', key: '3'},
    { name: 'prachi', key: '4'},
    { name: 'luigi', key: '5'},
    { name: 'paagal', key: '6'},
    { name: 'browser', key: '7'},
  ]);



  return (
    <View style={styles.container}>
     {<ScrollView>
      
     {
       people.map(item=> {
         return (
           <View key={item.key}>
             <Text style={styles.item}>{item.name}</Text>
           </View>
         )
       })
     }
     </ScrollView>
    } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
  item: {
    marginTop: 25,
    padding: 30,
    backgroundColor: 'crimson',
    fontSize: 25
  }
});
