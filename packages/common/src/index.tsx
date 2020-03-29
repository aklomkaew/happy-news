import * as React, { useState } from 'react';
import { StyleSheet, Text, View, Flatlist } from 'react-native';
// import axios from 'axios';

// // public IP address for your computer
// const serverUrl = 'http://108.227.22.246:5000';
// const http = axios.create({
//   baseURL: serverUrl,
// });

export const App: React.FC = () => {
  const [article, setArticle] = useState([
    {article : 'best way'},
    {article : 'good night'},
    {article : 'covid-is-all-around'},
  ]);

  return (
    <View style={styles.container}>
      <Flatlist
        data={article}
        renderItem={({item})=>(
          <Text style={styles.item}>Article : {item.article}</Text>
        )}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container{
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})