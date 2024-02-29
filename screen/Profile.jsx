import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

export default function Profile() {
    return (
        <View style={{ backgroundColor: '#26282C', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar style="auto" />
    
          <View style={{ alignItems: 'center', marginBottom: -20 }}>
            <Image
              source={require('../assets/profile.jpg')}
              style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 10 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>NUBUHORO Divine</Text>
            <Text style={{ color: 'grey', marginTop: 5 }}>nubuhorodivine23@gmail.com</Text>
            <Text style={{ color: 'yellow', marginBottom: 20 }}>Edit profile</Text>
          </View>
    
          <View style={{ marginTop: 40, width: '80%' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,marginTop:60 }}>
              <Ionicons name="mail-outline" size={24} color="white" style={{ marginRight: 10 }} />
              <Text style={{ color: 'white' }}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,marginTop:15 }}>
              <Ionicons name="settings-outline" size={24} color="white" style={{ marginRight: 10 }} />
              <Text style={{ color: 'white' }}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,marginTop:15 }}>
              <Ionicons name="language-outline" size={24} color="white" style={{ marginRight: 10 }} />
              <Text style={{ color: 'white' }}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,marginTop:15 }}>
              <Ionicons name="help-circle-outline" size={24} color="white" style={{ marginRight: 10 }} />
              <Text style={{ color: 'white' }}>Help, FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:50}}>
            <Text style={{ color: 'grey' }}>Terms and Conditions</Text>
            <Text style={{ color: 'grey', marginBottom: 20 }}>Privacy & Policy</Text>
            </TouchableOpacity>
          </View>
    
          <View style={{ marginTop: 60, alignItems: 'center' }}>
            <TouchableOpacity>
              <Button>Log Out</Button>
            </TouchableOpacity>
          </View>
        </View>
      );
    };