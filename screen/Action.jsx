import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Button, FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import YoutubePlayer from "react-native-youtube-iframe";
import Act from "../Components/Act";



export default function Action ({route}) {
        const movie=route.params;
        const handleplay=()=>{
            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)
                .then(response => response.json())
                .then(response => setVideo(response.results[0].key))
                .catch(err => console.error(err));
        }


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
    };
    const [Actions, setActions] = useState([])
    const [Made, setMade] = useState([])
    const [video, setVideo] = useState('')

    useEffect(() => {
        Getmovie();
        Getpopular();
        handleplay();
    },[])
  const Getpopular = ()=>{
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setActions(response.results))
    .catch(err => console.error(err));
  }
  const Getmovie = ()=>{
    fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    .then(response => response.json())
    .then(response => setMade(response.results))
    .catch(err => console.error(err));
  }

    return (
        <ScrollView>
        <View style={{ width: '100%', height: '100%', backgroundColor: '#26282C',  }}>
            <StatusBar style="auto" />
            
            
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 30 }}>Action</Text>
            <View style={{  marginLeft: 20 ,marginRight:20, marginTop:20 ,}}>
            <YoutubePlayer
                height={300}
                videoId={video} 
            />
            </View>

            <View>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
                    {movie.title}
                  
                </Text>
                <Text style={{ color: 'grey', fontSize: 15,  marginLeft: 20, }}>
                    {movie.overview}
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", marginLeft: 20, marginTop: 20, justifyContent: "space-between" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity style={{ width: '47%', flexDirection: 'row', padding: 7, borderRadius: 5, alignItems:'flex-start', justifyContent:'flex-start', backgroundColor: '#FFD22F' }}>
                        <Feather name="play" size={24} color="white" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '47%', flexDirection: 'row', padding: 7, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1 }}>
                        <AntDesign name="plus" size={15} color="yellow" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>My List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20, }}>U.S Action movie</Text>

            <FlatList
                        horizontal
                        data={Actions}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item }) => 
                        <TouchableOpacity onPress={() => navigation.navigate('action',item)}>
                        <Act pictures={item.poster_path} />
                        </TouchableOpacity>
                    
                    }
                    />
            <View>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Movie Original Actions</Text>
            </View>
            <FlatList
                        horizontal
                        data={Actions}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item }) =>
                        <TouchableOpacity>
                        <Act pictures={item.poster_path}/>
                        </TouchableOpacity>
                        }
                    />



            
        </View>
        </ScrollView>
    );
}