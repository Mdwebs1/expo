import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { StyleSheet, Text, SafeAreaView , Button , Image , TouchableOpacity , View , ScrollView} from 'react-native';
//axios.defaults.baseURL = "http://10.20.35.208:8080";
axios.defaults.baseURL = "http://b1f4-37-224-52-18.ngrok.io";


export default function Sweets() {
 
  //set
  const [sweet ,setSweet] = useState([])
  //const [flexDirection, setflexDirection] = useState("column");


useEffect(() => {
  axios.get("/sweetRouter/sweets")
  .then((res) => {
    setSweet(res.data)
  });
},[]);
  return (
    <SafeAreaView style={styles.container}>
    <Text>Hello</Text>
   <ScrollView>
    {sweet?.map((sweets , index) => {
      return(
        <View key={index} style={styles.container}>
        <View style={styles.coffee}>
        <TouchableOpacity style={styles.drinkText}>  
          <Text >sweet name is : {sweets.name}</Text> 
       <Text > price:  {sweets.price}</Text></TouchableOpacity>

   
       <TouchableOpacity>
       <Image style={styles.drinkImage} source={ {uri:sweets.sweetImage} }/>
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
