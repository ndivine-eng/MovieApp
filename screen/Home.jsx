import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Ionicons } from "react-native-vector-icons";
import Homecomp from "../Components/Homecomp";
import Films from "../Components/Films";
import Photos from "../Components/Photos";
import MadeFor from "../Components/MadeFor";
import Popular from "../Components/Popular";
import List from "./List";

export default function Home({ navigation }) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
    };

    const [posts, setPosts] = useState([])
    const [Made, setMade] = useState([])
    const [Pop, setPop] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setPosts(response.results))
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setMade(response.results))
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setPop(response.results))
            .catch(err => console.error(err));
           

    }, []);

    const handlepress = () => {
        navigation.navigate('action');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#26282c' }}>
            <StatusBar style="dark" />
            <ScrollView>
                <View style={{ backgroundColor: '#1f2123', paddingTop: 30, paddingHorizontal: 20 }}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={require('../assets/muvilogo.jpg')} style={{ width: 180, height: 53 }} />
                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <Ionicons name="bookmark-outline" size={20} color="white" />
                            <Ionicons name="notifications-outline" size={20} color="white" />
                        </View>
                    </View>
                    {/* Horizontal ScrollView */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Homecomp title="Featured" style={{ color: '#f2b817' }} />
                        <Homecomp title="Series" />
                        <Homecomp title="Films" />
                        <Homecomp title="Origin" />
                        <Homecomp title="Popular" />
                    </ScrollView>
                    {/* Films */}
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Films film="Popular Today" />
                        <Films film="Marvel" />
                        <Films film="Fans Choice" />
                        <Films film="Star Wars" />
                        <Films film="Popular" />
                    </View>
                    {/* New Release */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>New Release</Text>
                        <Text style={{ color: '#595b5f' }}>View more</Text>
                    </View>
                    {/* FlatList for New Releases */}
                    <FlatList
                        horizontal
                        data={posts}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item }) => 
                        <TouchableOpacity onPress={()=>navigation.navigate('action',item)}>
                        <Photos pictures={item.poster_path}/>
                        </TouchableOpacity>
                        }
                    />
                    {/* Made for you */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Made for you</Text>
                        <Text style={{ color: '#595b5f' }}>View more</Text>
                    </View>
                    {/* FlatList for Made for you */}
                    <FlatList
                        horizontal
                        data={Made}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item }) => 
                        <TouchableOpacity onPress={()=>navigation.navigate('action',item)}>
                        <MadeFor name={item.poster_path} />
                        </TouchableOpacity>
                        
                        }

                        
                    />
                    {/* Popular */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Popular on <Text style={{ fontWeight: 'bold', color: '#f3b919' }}>Muvi</Text></Text>
                        <Text style={{ color: '#595b5f' }}>View more</Text>
                    </View>
                    {/* FlatList for Popular */}
                    <FlatList                                                                                                 
                        data={Pop}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                        renderItem={({ item }) => 
                        <TouchableOpacity>
                        <Popular pictures={item.poster_path} Onpress={()=>navigation.navigate('action',item)}/>
                        </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>
           
        </View>
    );
}
