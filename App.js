import React from 'react'
import Joker from './screen/joker'
import { View } from 'react-native'
import Muvi from './screen/Muvi'
import Welcome from './screen/Welcome'
import Create from './screen/Create'
import Login from './screen/Login'
import Home from './screen/Home'
import Search from './screen/Search'
import List from './screen/List'
import Profile from './screen/Profile'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Ionicons } from "react-native-vector-icons";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function bottomtab(){
  return(
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{
      tabBarIcon: () => (
        <AntDesign name="home" size={24} color="#f3b919" style={{ marginLeft: 20 }} />
      ),
    }}/>
    <Tab.Screen name="Search" component={Search} options={{
      tabBarIcon: () => (
        <AntDesign name="search1" size={24} color="black" style={{ marginLeft: 20 }} />
      )
    }} />
    <Tab.Screen name="List" component={List}  options={{
      tabBarIcon: () => (
        <AntDesign name="file1" size={24} color="black" style={{ marginLeft: 20 }} />
      )
    }}/>

    <Tab.Screen name="Profile" component={Profile} options={{
      tabBarIcon: () => (
        <Ionicons name="notifications-outline" size={25} color="black" />
      )
    }}/>
   </Tab.Navigator>
  )
  
}
export default function App(){

  return(

    <NavigationContainer>
    <Stack.Navigator initialRouteName="muvi">
      <Stack.Screen name="muvi" component={Muvi} options={{ headerShown: false }}/>
      <Stack.Screen name="joker" component={Joker}options={{ headerShown: false }} />
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="create" component={Create} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={bottomtab} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  

  );
};
 
