import React from 'react'
import Joker from './screen/joker'
import Muvi from './screen/Muvi'
import Welcome from './screen/Welcome'
import Create from './screen/Create'
import Login from './screen/Login'
import Home from './screen/Home'
import Action from './screen/Action'
import Search from './screen/Search'
import List from './screen/List'
// import Profile from './screen/Profile'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Ionicons } from "react-native-vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import Profile from './screen/Profile'
import ThemeProvider from './Components/Context/ThemeProvider'


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function Bottomtab(){
  return(
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{
      headerShown: false,
      tabBarIcon: () => (
        <AntDesign name="home" size={24} color="#f3b919" style={{ marginLeft: 20 }} />
      ),
    }}/>
    <Tab.Screen name="Search" component={Search} options={{
      headerShown: false,
      tabBarIcon: () => (
        <AntDesign name="search1" size={24} color="black" style={{ marginLeft: 20 }} />
      )
    }} />
    <Tab.Screen name="List" component={List}  options={{
      headerShown: false,
      tabBarIcon: () => (
        <AntDesign name="file1" size={24} color="black" style={{ marginLeft: 20 }} />
      )
    }}/>

    <Tab.Screen name="Profile" component={DrawerNavigation} options={{
      headerShown: false,
      tabBarIcon: () => (
        <Ionicons name="notifications-outline" size={25} color="black" />
      )
    }}/>
   </Tab.Navigator>
  )
  
}

function DrawerNavigation(){
  return(
    <Drawer.Navigator initialRouteName="profile">
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="action" component={Action} />
      <Drawer.Screen name="login" component={Login} />
      <Drawer.Screen name="create" component={Create} />
      <Drawer.Screen name="welcome" component={Welcome} />
      <Drawer.Screen name="joker" component={Joker} />
      <Drawer.Screen name="muvi" component={Muvi} />
      <Drawer.Screen name="search" component={Search} />


    </Drawer.Navigator>
  )
}
export default function App(){

  return(
    <ThemeProvider>
    <NavigationContainer >
    <Stack.Navigator initialRouteName="muvi">
      <Stack.Screen name="muvi" component={Muvi} options={{ headerShown: false }}/>
      <Stack.Screen name="joker" component={Joker}options={{ headerShown: false }} />
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="create" component={Create} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={Bottomtab} options={{ headerShown: false }} />
      <Stack.Screen name='action' component={Action}  options={{ headerShown: false }} />
      <Stack.Screen name='search' component={Search}  options={{ headerShown: false }} />
      <Stack.Screen name='profile' component={Profile}  options={{ headerShown: false }} />
      <Stack.Screen name='list' component={List}  options={{ headerShown: false }} />

    </Stack.Navigator>   
  </NavigationContainer>
  </ThemeProvider>
  );


 
};
 
