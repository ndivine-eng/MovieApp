import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

 export default function Homecomp ({ title }, {Featute }) {
    return (
        
        <View>
            {/* <Text style={{fontSize:20, fontWeight:'bold', color:'#f2b817', borderRadius:10, padding:10,}}>{Featute}</Text> */}
            <Text style={{fontSize:20, color:'white', borderRadius:10, padding:10,}}>{title}</Text>
            
            
        </View>
    )
}

