import React from 'react';
import { StyleSheet, View,Button } from 'react-native';


export default function Home({ navigation }) {
  const pressHandler = () => {
   // navigation.navigate('Drinks');
    navigation.push('Drinks');
    

  }
  // const pressHandlerSweet = () => {
  //   navigation.push('Sweets');
  // }
  return (
    <View style={styles.container}>
    <Button title='Coffee' onPress={pressHandler} />
    <Button title='Sweet' 
     onPress={() => navigation.navigate("Sweets")} />

 
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    width:200,
  },
});