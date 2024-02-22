import React from "react";
import { View, Text,StyleSheet } from "react-native";

const Muvi = ({navigation}) => {
    return (
        <View style={{width:'100%', height:'100%',justifyContent:'center',alignItems:'center', backgroundColor:'#26282c'}}>
            <View style={{flexDirection:'row',  justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30, backgroundColor:'#f3b919', padding:10,paddingTop:5,paddingBottom:5, borderRadius:10,width:50, height:50, fontWeight:'bold',}}>M</Text>
            <Text style={{fontSize:30, fontWeight:'bold', color:'white',marginHorizontal:5}}  onPress={() =>
        navigation.navigate('joker')
      }>Muvi</Text>
        </View>

        </View>
        
    );
};

export default Muvi;
