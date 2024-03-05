import React, { useState } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const userExist = AsyncStorage.getItem('user_data')
   

    const ValidateForm = () => {
          //Validate email
      if (!email.trim()) {
        setEmailError('Email is required')
        Valid = false
     } else if (!isValidEmail(email)) {
        setEmailError('Invalid email format')
        Valid = false
     } else {
        setEmailError('')
     }
     //validate password
     if (password.trim() === '') {
        setPasswordError('password is required')
        Valid = false
     } else {
        setPasswordError('')
     }
     return Valid
  }


  const handleSubmit = () => {
     if (ValidateForm()) {
        //Perform form submission 
        navigation.navigate('home')
        console.log('Form submitted:',
           email, password)
     }
  }
  const isValidEmail = (email) => {
     //Basic email Validation regex
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     return emailRegex.test(email)
  }
return (
    <View style={{ width: "100%", height: "100%", backgroundColor:'#26282c' }}>
        <View>
            <ImageBackground
                source={require('../assets/mymy.jpg')} style={{ width: '100%', height: '100%', height: 400, }} >
            </ImageBackground>



            <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282c', '#26282c',]}>
                <View style={{ marginLeft: 20, marginRight: 20, }}>
                    <View style={{display:'flex', flexDirection:'column'}}>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row", height: 'auto', width: '100%', }}>
                        <TextInput
                            mode="offline"
                            value={email}
                            onChangeText={setEmail}
                            error={!!emailError}
                            label="Email"
                            textColor="white"
                            placeholder="Enter Email"
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'email-outline'} color={'#F6A035'} />}
                        />
                        
                    </View>
                    {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
                    </View>
                    <View style={{display:'flex', flexDirection:"column"}}> 
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                        <TextInput
                            mode="offline"
                            value={password}
                            onChangeText={setPassword}
                            error={!!passwordError}
                            label="password"
                            textColor="white"
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'eye-off-outline'} color={'#F6A035'} />}
                            />
                            </View>
                        {passwordError ? <Text style={{ color: 'red', marginLeft: 10}}>{passwordError}</Text> : null}
                        </View>
                   

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: 'black', margin: 20, marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={handleSubmit}>Get started</Text>
                    </TouchableOpacity>
                   
                    {/* <Text style={{ marginTop: 30, color: "white", marginLeft: 20, fontSize: 18 }}>Or continue with</Text> */}
                    {/* <TouchableOpacity>
                        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20, display: "flex", flexDirection: "row" }}>
                            <Image source={require('../assets/google.png')} style={{ width: 50, height: 50 }} />
                            <Image source={require('../assets/fb.png')} style={{ width: 50, height: 50 }} />
                        </View>
                    </TouchableOpacity> */}

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, color: 'black', marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={() => navigation.navigate('home')}>Watch movie</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    </View>

)
};

