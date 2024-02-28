import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

 export default function Homecomp ({ title }, {Featute }) {
    return (

        <TouchableOpacity>
        
        <View>
           
            <Text style={{fontSize:20, color:'white', borderRadius:10, padding:10,}}>{title}</Text>
            
            
        </View>
        </TouchableOpacity>
    )
}

