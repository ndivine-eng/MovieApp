import React, { useState } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import { FIREBASE_APP_AUTH } from "../fireBaseConfiguration";


import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});






export const authantication = FIREBASE_APP_AUTH;


export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const ValidateForm = () => {
        //Validate email
        if (!email.trim()) {
            setEmailError('Email is required')
            return false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format')
            return false;
        } else {
            setEmailError('')
        }
        //validate password
        if (password.trim() === '') {
            setPasswordError('Password is required')
            return false;
        } else {
            setPasswordError('')
        }
        return true;
    }

    const storeData = async () => {
        try {
            const data = {
                email: email,
                password: password
            };
            const jsonData = JSON.stringify(data);
            console.log(data);
            await AsyncStorage.setItem('user_data', jsonData);
            console.log('Data stored successfully!');

            const getValue = await AsyncStorage.getItem('user_data');
            if (getValue != null) {
                console.log(JSON.parse(getValue));
            } else {
                console.log('No data');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
        if (ValidateForm()) {
            //Perform form submission 
            navigation.navigate('home')
            console.log('Form submitted:', email, password)
            storeData();
        }
        try {
            const response = await signInWithEmailAndPassword(
                authantication,
                email,
                password

            );
            console.log(response);

        } catch (error) {
            console.log(error)

        }
    }

    const isValidEmail = (email) => {
        //Basic email Validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#26282c' }}>
            <View>
                <ImageBackground
                    source={require('../assets/mymy.jpg')} style={{ width: '100%', height: '100%', height: 400, }} >
                </ImageBackground>

                <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282c', '#26282c',]}>
                    <View style={{ marginLeft: 20, marginRight: 20, }}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
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
                        <View style={{ display: 'flex', flexDirection: "column" }}>
                            <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                                <TextInput
                                    mode="offline"
                                    value={password}
                                    onChangeText={setPassword}
                                    error={!!passwordError}
                                    label="Password"
                                    textColor="white"
                                    placeholder="Enter your password"
                                    secureTextEntry={!showPassword}
                                    style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}

                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={22} color="orange" style={{ alignSelf: 'end' }} />
                                </TouchableOpacity>
                                {passwordError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{passwordError}</Text>) : null}
                            </View>
                            {passwordError ? <Text style={{ color: 'red', marginLeft: 10 }}>{passwordError}</Text> : null}
                        </View>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', margin: 20, marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={handleSubmit}>Get started</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'black', margin: 10, marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={() => navigation.navigate('home')}>Watch movie</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
};
