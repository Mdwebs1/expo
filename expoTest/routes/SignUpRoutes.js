import Test from '../commponent/test'
import signUp from '../commponent/SignUp'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function SweetRoutes() {

  return (

     <Stack.Navigator>
     <Stack.Screen name='signUp' component={signUp}/>
        <Stack.Screen name='Test' component={Test}/>

      </Stack.Navigator>

  );
}