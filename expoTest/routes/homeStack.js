import Home from '../commponent/Home'
import Drinks from '../commponent/Drinks'
import Sweets from '../commponent/Sweets'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function Navigator() {

  return (
    <NavigationContainer >
     <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Drinks' component={Drinks}/>
        <Stack.Screen name='Sweets' component={Sweets}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
