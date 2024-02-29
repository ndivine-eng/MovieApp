import React from "react";
import { View, Text, Image } from "react-native";

export default function Act ({pictures, text }) {
    return (
        <View >
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${pictures}` }} style={{width:300, height:200, borderRadius:10, marginTop:10, marginLeft:10}} />
            <Text>{text}</Text>
            
        </View>
    )
}

