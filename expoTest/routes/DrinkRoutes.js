import Test from '../commponent/test'
import Drinks from '../commponent/Drinks'
import YourOrders from '../commponent/YourOrders'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function DrinkRoutes() {

  return (

     <Stack.Navigator>
     <Stack.Screen name='Drinks' component={Drinks}/>
        <Stack.Screen name='Test' component={Test}/>
        <Stack.Screen name='YourOrders' component={YourOrders}/>
      </Stack.Navigator>

  );
}
