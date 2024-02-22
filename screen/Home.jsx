import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Homecomp from "../Components/Homecomp";
import Films from "../Components/Films";
import Photos from "../Components/Photos";

export default function Home({navigation}){
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:'#26282c'}}>
            <View style={{width:"100%", backgroundColor:'#1f2123'}}>
            <View style={{ width:'100%',}}>
                <Image source={require('../assets/muvilogo.jpg')} style={{width:180, height:53,margin:20 }}/>
            </View>
                <View style={{height: 15}}></View>
                <ScrollView horizontal style={{width:"100%",}}>
                    <View style={{ width:"100%", display:"flex", flexDirection:"row" }}>
                    <View>
                        <Homecomp title="Featured" style={{color:'#f2b817'}}/>
                        <Text style={{ marginLeft:20, width:50, height:5, backgroundColor:'#f2b817'}}></Text>
                    
                    </View>
                    <Homecomp title="Series"/>
                    <Homecomp title="Films"/>
                    <Homecomp title="Origin"/>
                    <Homecomp title="Popular"/>
                    </View>
                </ScrollView>
            </View>
            <View>
            <ScrollView horizontal style={{width:"100%",}}>
                    <View style={{gap:10, display:"flex", flexDirection:"row", marginTop:20 ,}}>
                        <Films film="Popular Today"/>
                        <Films film="Marvel"/>
                        <Films film="Fans Choice"/>
                        <Films film="Star Wars"/>
                        <Films film="Popular"/>
                    </View>
                </ScrollView>
            </View>
           <View style={{width:'100%', justifyContent:'space-between', flexDirection:'row',}}>
           <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20, marginLeft:20}}>New Release</Text>
           <Text style={{ color:'white',marginTop:20,}}>View more</Text>
           </View>

           <View>
            


           </View>
            

            
    
        </View>
    )
  
}

