import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Welcome ({navigation}){
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:'#26282c'}}>
             <View style={{alignItems:'center', width:'100%', height:'12%', backgroundColor:'black'}}>
                <Image source={require('../assets/muvilogo.jpg')} style={{width:150, height:55, marginTop:20, alignSelf:'center', }}/>
             </View>
            <View style={{ alignItems:'center', width:"100%", height:"100%"}}>

                <Image source={require('../assets/wlcm.png')} style={{width:250, height:250, marginTop:50}}/>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20}}>Welcome to Muvi</Text>
                <Text style={{fontSize:15, color:'white', margin:20 , textAlign:'center'}}>Free movie streamming all your needs every time and every where </Text>

                <TouchableOpacity>
                    <Text style={{fontSize:15, color:'black', margin:20 ,marginTop:'30%', textAlign:'center', backgroundColor:'#f3b919', padding:10, borderRadius:5,width:300, height:40, fontWeight:'bold'}} >Watch Movie</Text>   
                </TouchableOpacity>
                <TouchableOpacity>
                        <Text style={{fontSize:15, color:'white', margin:20 , textAlign:'center'}}  onPress={() =>
                        navigation.navigate('login')
                    }>Sign in </Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
