import React from 'react';
//  import Home from "./commponent/home"
import Navigator from './routes/homeStack';
import axios from "axios";
import { StyleSheet, SafeAreaView } from 'react-native';

//axios.defaults.baseURL = "http://10.20.35.208:8080";
axios.defaults.baseURL = "http://b1f4-37-224-52-18.ngrok.io";


export default function App() {


  return (
<SafeAreaView style={styles.container}>
           <Navigator />
           </SafeAreaView>
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
});
