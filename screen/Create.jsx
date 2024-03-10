import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FIREBASE_APP_AUTH } from "../fireBaseConfiguration";

export default function Create({ navigation }) {
    const [confirm, setConfirm] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validateForm = () => {
        let valid = true;

        // Email validation
        if (email.trim() === '') {
            setEmailError("Email is required");
            valid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email');
            valid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (password.trim() === '') {
            setPasswordError('Password is required');
            valid = false;
        } else {
            setPasswordError('');
        }

        // Confirm password validation
        if (confirm.trim() === '') {
            setConfirmError('Please confirm your password');
            valid = false;
        } else if (confirm !== password) {
            setConfirmError('Passwords do not match');
            valid = false;
        } else {
            setConfirmError('');
        }

        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Perform form submission
            console.log('Form submitted:', email, password, confirm);
            navigation.navigate('login');
            // Ensure to handle storage or backend logic here
        }
    };

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: '#26282c' }}>
            <View style={{ top: 100 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20, color: "white" }}>Create Account</Text>
                </View>
                <View>
                    <Text style={{ marginTop: 20, color: '#595b5f', marginLeft: 20, fontSize: 18 }}>Enter information below or log in with social account  to get started </Text>
                </View>
                <View>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row", height: 'auto', width: '100%' }}>
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
                        {emailError ? <Text style={{ color: 'red', marginLeft: 10 }}>{emailError}</Text> : null}
                    </View>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                        <TextInput
                            mode="offline"
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            error={!!passwordError}
                            textColor="white"
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'eye-off-outline'} color={'#F6A035'} />}
                        />
                        {passwordError ? <Text style={{ color: 'red', marginLeft: 10 }}>{passwordError}</Text> : null}
                    </View>
                    <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
                        <TextInput
                            mode="offline"
                            label="Confirm Password"
                            value={confirm}
                            onChangeText={setConfirm}
                            error={!!confirmError}
                            placeholder="Confirm your password"
                            secureTextEntry
                            textColor="white"
                            style={{ backgroundColor: '#26282c', borderRadius: 10, borderColor: "white", height: 50, fontSize: 18, width: "100%", color: "white" }}
                            right={<TextInput.Icon icon={'eye-off-outline'} color={'#F6A035'} />}
                        />
                        {confirmError ? <Text style={{ color: 'red', marginLeft: 10 }}>{confirmError}</Text> : null}
                    </View>
                </View>
                <Text style={{ marginTop: 30, color: '#e2e4e6', marginLeft: 20, fontSize: 18 }}>Or continue with</Text>
                <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20, display: "flex", flexDirection: "row" }}>
                    <Image source={require('../assets/google.png')} style={{ width: 60, height: 50 }} />
                    <Image source={require('../assets/fb.png')} style={{ width: 50, height: 50 }} />
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: 'black', margin: 20, marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={handleSubmit}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: 'black', margin: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f3b919', padding: 10, borderRadius: 5, width: 340, height: 40, fontWeight: 'bold' }} onPress={() => navigation.navigate('welcome')}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
