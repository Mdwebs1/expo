import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StyleSheet, Text, SafeAreaView  , Image , TouchableOpacity , View , ScrollView} from 'react-native';
//axios.defaults.baseURL = "http://10.20.35.208:8080";
//axios.defaults.baseURL = "https://3931-37-224-52-18.ngrok.io";



export default function Sweets({ navigation }) {
 
  //set
  const [sweet ,setSweet] = useState([])
  //const [flexDirection, setflexDirection] = useState("column");


useEffect(() => {
  axios.get(`/sweetRouter/sweets?timestamp=${new Date().getTime()}`)
  .then((res) => {
    setSweet(res.data)
  });
},[]);
  // return (
  //   <SafeAreaView style={styles.container}>
  //   <Text>Hello</Text>
  //  <ScrollView>
  //   {sweet?.map((sweets , index) => {
  //     return(
  //       <View key={index} style={styles.container}>
  //       <View style={styles.coffee}>
  //       <TouchableOpacity style={styles.drinkText}>  
  //         <Text >sweet name is : {sweets.name}</Text> 
  //      <Text > price:  {sweets.price}</Text></TouchableOpacity>
  //      <TouchableOpacity onPress= {()=>{navigation.navigate('Test',{id:drinks._id,page:"Sweets"})}}>
  //        <Image style={styles.sweetImage} source={ {uri:sweets.sweetImage}}/>
  //      </TouchableOpacity>
  //      </View>
  //       </View>
  //     )
  //   })}
  //   </ScrollView>
  //     </SafeAreaView>


  // )}
  

  return (
    <SafeAreaView style={styles.container}>
    <Text>All Drinks</Text>
   <ScrollView>
    {sweet?.map((sweets , index) => {
      return(
        <View key={index} style={styles.container}>
        <View style={styles.coffee}>
        <TouchableOpacity style={styles.drinkText}>  
          <Text >sweets name is : {sweets.name}</Text> 
       <Text > price:  {sweets.price}</Text></TouchableOpacity>
      <TouchableOpacity onPress= {()=>{navigation.navigate('Test',{id:sweets._id,page:"Sweets"})}} >
       <Image style={styles.drinkImage} source={ {uri:sweets.image} }  />
       </TouchableOpacity> 
       </View>
        </View>
      )
    })}
   
    </ScrollView>
      </SafeAreaView>


  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  drinkImage:{
    width:50,  
    height:70,
    backgroundColor:'black'

  },

  coffee: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
});
