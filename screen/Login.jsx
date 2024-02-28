import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View>
                <ImageBackground
                    source={require('../assets/mymy.jpg')} style={{ width: '100%', height: '100%', height: 400, }} >
                </ImageBackground>



                <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282c', '#26282c',]}>
                    <View style={{marginLeft: 20, marginRight: 20, }}>
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
                    <Text style={{ marginTop: 30, color: "white", marginLeft: 20, fontSize: 18 }}>Or continue with</Text>
                    <TouchableOpacity>
                    <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20, display: "flex", flexDirection: "row" }}>
                        <Image source={require('../assets/google.png')} style={{ width: 50, height: 50 }} />
                        <Image source={require('../assets/fb.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: 'black', margin: 20, marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={() => navigation.navigate('home')} >Login</Text>
                    </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
};
