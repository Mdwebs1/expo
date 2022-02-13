import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

function test({route, navigation}) {
  const [detail , allDetail] = useState([])
  const {id,page} = route.params;
  //locall storage
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
    getValueFor(key)
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }
useEffect(() => {
  page =="Drinks"?
  axios.get(`/drinkRouter/orders/${id}`)
 //axios.get("/drinkRouter/drinks")
  .then((res) => {
    allDetail(res.data)

  }): 
  axios.get(`/sweetRouter/orders/${id}`)  
  .then((res) => {
    allDetail(res.data)

  })
},[]);
// const pressHandler = () => {
//   // navigation.navigate('Drinks');
//    //navigation.push('YourOrders');
//    console.log('YourOrders')
   

//  }
  return (
   
   <TouchableOpacity>
   <AntDesign name="shoppingcart" size={24} color="black"  onPress={()=>navigation.navigate('YourOrders')}/>
     {detail.map((detail ,index)=>{
       return(
        <View  key={index}>
  <View style={styles.container}>
  <View style={styles.coffee}>
  <TouchableOpacity style={styles.drinkText}>  
          <Text >drink name is : {detail.name}</Text> 
          <Text > price:  {detail.price}</Text>
       </TouchableOpacity>

      <Image style={styles.drinkImage} source={ {uri:detail.image} } />
 

  </View>

  </View>

  <View style={styles.buttonsView}>
      <TouchableOpacity onPress={() =>  save('item', JSON.stringify(detail)) } style={styles.button}>
          <Text style={styles.buttonText} >Add</Text>
        </TouchableOpacity>
        </View>

        </View>
     )})}

       
  
   </TouchableOpacity> 
    
 
   
  )
  
}

const styles = StyleSheet.create({
  drinkImage:{
    width:50,  
    height:70,
    backgroundColor:"black"

  },
  coffee: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  button: {
    width: '40%',
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
},
buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
},
buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

}

});

export default test;
