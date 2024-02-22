import React from "react";
import { View, Text, Image } from "react-native";

export default function Photos ({pictures}) {
    return (
        <View >
            <Image style={{width:200, height:200}}>{pictures}</Image>
        </View>
    )
}