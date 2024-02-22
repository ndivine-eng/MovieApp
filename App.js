import React from 'react'
import Joker from './screen/joker'
import { View } from 'react-native'
import Muvi from './screen/Muvi'
import Welcome from './screen/Welcome'
import Create from './screen/Create'
import Login from './screen/Login'
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export const App=()=>{

  return(

    <NavigationContainer>
    <Stack.Navigator initialRouteName="muvi">
      <Stack.Screen name="muvi" component={Muvi} options={{ headerShown: false }}/>
      <Stack.Screen name="joker" component={Joker}options={{ headerShown: false }} />
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="create" component={Create} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default App;