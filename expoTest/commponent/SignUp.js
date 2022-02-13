import React  , {useEffect, useState} from 'react';
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StyleSheet, Text, SafeAreaView  ,TextInput,    View } from 'react-native';
function SignUp() {
  return (
  <SafeAreaView> 
    <View> 
    <Text > Demo Form </Text>
    <TextInput 
        placeholder="Email"
    /> 
            <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />

    </View>
  </SafeAreaView>
  )
}

export default SignUp