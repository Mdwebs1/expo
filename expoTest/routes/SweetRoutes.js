import Test from '../commponent/test'
import Sweets from '../commponent/Sweets'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function SweetRoutes() {

  return (

     <Stack.Navigator>
     <Stack.Screen name='Sweets' component={Sweets}/>
        <Stack.Screen name='Test' component={Test}/>

      </Stack.Navigator>

  );
}
