import * as React from 'react';
import {useState} from 'react';
import { StyleSheet,Text, View, TextInput} from 'react-native';
// import axios from 'axios';

// // public IP address for your computer
// const serverUrl = 'http://108.227.22.246:5000';
// const http = axios.create({
//   baseURL: serverUrl,
// });

export const App: React.FC = () => {
  const [source, setSource] = useState('BBC');
  return (
    <View style={styles.container}>
      <Text>Search news source:</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. BBC, CNN, VOA'
      onChangeText={()=>setSource()}
      />
      <Text>Source : {source}</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor: 'grey',
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    borderWidth : 1,
    borderColor: '#777',
    padding: 8,
    backgroundColor: 'white',
    margin:10,
    width: 20,
  }
})