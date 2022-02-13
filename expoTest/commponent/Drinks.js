import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StyleSheet, Text, SafeAreaView  , Image , TouchableOpacity , View , ScrollView} from 'react-native';
//axios.defaults.baseURL = "http://10.20.35.208:8080";
//axios.defaults.baseURL = "https://3931-37-224-52-18.ngrok.io";


export default function Drinks({ navigation }) {
 
  //set
  const [drink ,setDrink] = useState([])
  //const [flexDirection, setflexDirection] = useState("column");


useEffect(() => {
  axios.get(`/drinkRouter/drinks?timestamp=${new Date().getTime()}`)
 //axios.get("/drinkRouter/drinks")
  .then((res) => {
    //console.log(res.data)
    setDrink(res.data)
   

  });
 
},[]);



  return (
    <SafeAreaView style={styles.container}>
    <Text>All Drinks</Text>
   <ScrollView>
    {drink?.map((drinks , index) => {
      return(
        <View key={index} style={styles.container}>
        <View style={styles.coffee}>
        <TouchableOpacity style={styles.drinkText}>  
          <Text >drink name is : {drinks.name}</Text> 
       <Text > price:  {drinks.price}</Text></TouchableOpacity>
      <TouchableOpacity onPress= {()=>{navigation.navigate('Test',{id:drinks._id,page:"Drinks"})}} >
       <Image style={styles.drinkImage} source={ {uri:drinks.image} }  />
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

  },
  coffee: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
});
