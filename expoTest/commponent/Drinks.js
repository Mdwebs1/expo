import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { StyleSheet, Text, SafeAreaView , Button , Image , TouchableOpacity , View , ScrollView} from 'react-native';
//axios.defaults.baseURL = "http://10.20.35.208:8080";
axios.defaults.baseURL = "http://b1f4-37-224-52-18.ngrok.io";


export default function Drinks() {
 
  //set
  const [drink ,setDrinks] = useState([])
  //const [flexDirection, setflexDirection] = useState("column");


useEffect(() => {
  axios.get("/drinkRouter/drinks")
  .then((res) => {
    setDrinks(res.data)
    console.log(res.data)

  });
},[]);


  return (
    <SafeAreaView style={styles.container}>
    <Text>Hello</Text>
   <ScrollView>
    {drink?.map((drinks , index) => {
      return(
        <View key={index} style={styles.container}>
        <View style={styles.coffee}>
        <TouchableOpacity style={styles.drinkText}>  
          <Text >drink name is : {drinks.name}</Text> 
       <Text > price:  {drinks.price}</Text></TouchableOpacity>

   
       <TouchableOpacity>
       <Image style={styles.drinkImage} source={ {uri:drinks.drinkImage} }/>
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
