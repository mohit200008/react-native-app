import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
    { name: 'shaun', id: '1'},
    { name: 'yashi', id: '2'},
    { name: 'isha', id: '3'},
    { name: 'prachi', id: '4'},
    { name: 'luigi', id: '5'},
    { name: 'paagal', id: '6'},
    { name: 'browser', id: '7'},
  ]);



  return (
    <View style={styles.container}>
     <FlatList
       numColumns={2} 
       keyExtractor={(item)=> item.id}
       data={people}
       renderItem={({ item })=> (
        <Text style={styles.item}>{item.name}</Text>
       )}
     />
     
    
    
    {
    //    <ScrollView>
      
    //  {
    //    people.map(item=> {
    //      return (
    //        <View id={item.id}>
    //          <Text style={styles.item}>{item.name}</Text>
    //        </View>
    //      )
    //    })
    //  }
    //  </ScrollView>
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
    padding: 25,
    backgroundColor: 'crimson',
    fontSize: 25,
    margin:25

  }
});
