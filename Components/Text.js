import React from "react";
import { View, Text, } from "react-native";

export default function Text({ text,label }) {
    return (
        <View >
            <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20, marginLeft:20}}>{text}</Text>
            <Text  style={{ color:'white',marginTop:20, color:'#595b5f'}}>{label}</Text>
        </View>
    );
}