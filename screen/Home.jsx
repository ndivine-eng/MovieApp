import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";


const Home=({navigation}) =>{
    return (
        <View style={{width:"100%", height:"100%", backgroundColor:'#26282c'}}>

            <ScrollView>

            <View style={{alignItems:'center', width:'100%', height:'12%', backgroundColor:'black'}}>
                <Image source={require('../assets/muvilogo.jpg')} style={{width:150, height:55, marginTop:20, alignSelf:'center', }}/>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                </ScrollView>
            </View>

            </ScrollView>

           
            

        </View>
    )
  
}

export default Home;