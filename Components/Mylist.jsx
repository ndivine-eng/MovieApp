import React from "react";
import{View,Text,Image,TouchableOpacity} from 'react-native'

export default function Mylist({name}){
    return(
        <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${name}` }} style={{width:300, height:200, borderRadius:10, marginTop:10, marginLeft:10}} />
          
        </View>
    )
}