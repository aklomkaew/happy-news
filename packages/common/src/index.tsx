import * as React from 'react';
import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

// public IP address for your computer
const serverUrl = 'http://localhost:5000';
const http = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});


export const App: React.FC = () => {
  console.log("boutta up")
  var body = {"news_provider":"bbc"};
  http.post('/scores', body).then(function(result) {
    console.log("yom ywaddup %o", result)
  });
  return (
    <View>
      <Text>hello from react native web</Text>
      {/* <Text>{text}</Text> */}
      {/* <Button title="search" onPress={() => 
        goSearch(XML.toString(http.post('/scores', "cnn"))}/> */}
    </View>
  );
}