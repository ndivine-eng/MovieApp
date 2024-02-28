import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Films ({ film  }) {
    return (
     <TouchableOpacity>
         <View>
              <Text style={{ borderRadius:10,borderColor:'white',borderWidth:1,justifyContent:"space-between", color:'white', borderRadius:10, padding:10,}}>{film}</Text>
         </View>
         </TouchableOpacity>
    )
}