
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Joker =({ navigation })=> {
    return (
        <View>
            <ImageBackground>
                <Image source={{ uri: 'https://media.wired.com/photos/5db0965e60047600090d3a68/16:9/w_2287,h_1286,c_limit/Culture_jokerstairs_rev-1-JOK-19666_High_Res_JPEG.jpg' }} style={{ width: '100%', height: '100%', opacity: 0.9 }} />
                <View style={{ position: 'absolute', width: '100%', height: '100%', right: 0, top: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <View >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Enjoy your favourite</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>movie everywhere</Text>
                        <Text style={{ color: 'white', fontSize: 15, marginTop: 20 }}>Browse through our collections and discover hundreds of movies and series that you will love</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ position: 'absolute', bottom: 20, padding: 10,  borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() =>
                        navigation.navigate('create')
                    }>
                    <Text style={{ color: 'black', backgroundColor: '#FDD130', fontSize: 15, width: 355,textAlign: 'center', padding: 10 }}>Get Started</Text>
                </TouchableOpacity>


            </ImageBackground>
<StatusBar style="light"/>
        </View>
    );
};

export default Joker;
