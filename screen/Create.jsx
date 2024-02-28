import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ({navigation}){
    return(
        <View style={{width:"100%", height:"100%", backgroundColor:'#26282c' }}>
            <View style={{top:100}}>
            <View style={{alignItems:"center"}}>
            <Text style={{fontSize:30 , fontWeight:"bold", marginTop:20, color:"white"}}>Create Account</Text>
            </View>
            <View>
                <Text style={{ marginTop:20, color:'#595b5f', marginLeft:20, fontSize:18}}>Enter information below or log in with social account  to get started </Text>
            </View>
            <View>
            <View style={{ marginTop: 20, display: "flex", flexDirection: "row", height: 'auto', width: '100%', }}>
                        <TextInput
                            mode="offline"
                            label="Email"
                            textColor="white"
                            placeholder="Enter Email"
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'email-outline'} color={'#F6A035'} />}
                        />
                    </View>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                        <TextInput
                            mode="offline"
                            label="password"
                            textColor="white"
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'eye-off-outline'} color={'#F6A035'} />}
                        />
                    </View>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                        <TextInput
                            mode="offline"
                            label="confirm password"
                            placeholder="confirm your password"
                            secureTextEntry
                            textColor="white"
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'eye-off-outline'} color={'#F6A035'} />}
                        />
                    </View>


            </View>

            <Text style={{marginTop:30, color:'#e2e4e6', marginLeft:20, fontSize:18}}>Or continue with</Text>
            <View style={{marginTop:20, marginLeft:20, marginRight:20, display:"flex", flexDirection:"row"}}>
                <Image source={require('../assets/google.png')} style={{width:60, height:50}}/>
                <Image source={require('../assets/fb.png')} style={{width:50, height:50}} />
            </View>

            <TouchableOpacity>
                    <Text style={{fontSize:15, color:'black', margin:20 ,marginTop:'41%',justifyContent:'center',alignItems:'center', textAlign:'center', backgroundColor:'#f3b919', padding:10, borderRadius:5,width:340, height:40, fontWeight:'bold'}} onPress={() =>
                        navigation.navigate('welcome')
                    }>Register</Text>   
            </TouchableOpacity>
            </View>
            
            
        </View>
    )
};

