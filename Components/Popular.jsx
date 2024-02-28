import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Popular({ pictures }) {
    return (
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${pictures}` }} style={{ width: '100%', height: 300, borderRadius: 10, marginTop: 10, marginLeft: 10 }} />
        </View>
    );
}
