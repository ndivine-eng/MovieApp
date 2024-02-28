import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Photos from "../Components/Photos";

export default function Search({navigation}) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
    };
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setPosts(response.results))
            .catch(err => console.error(err));
    }, []);

    const [posts, setPosts] = useState([]);

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:'#1f2123'}}>
            <ScrollView>
                <TextInput
                    placeholder={'Search any movie Genre or cast'}
                    mode={'outlined'}
                    textColor='white'
                    style={{height: 50, marginTop: 50,marginRight: 20, backgroundColor: '#303234', borderRadius: 10, borderColor: "white", fontSize: 18, width: "100%", color: "white"}}
                    right={<TextInput.Icon icon={'magnify'} />}
                /> 

                <View style={{height: 70}}></View>

                <View style={{backgroundColor:'#26282C',  alignContent:"center", alignItems:"center", justifyContent:"center"}} >
                    <Image source={require('../assets/search.png')} style={{height:200, width:300}}/>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20}}>Search any movie</Text>
                    <Text style={{fontSize:15, color:'white', margin:20}}>Explore our libraries and enjoy our movies with your family ever </Text>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20}}>May be you likes</Text>
                    <FlatList
                        horizontal={true}
                        data={posts}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View />}
                        renderItem={({ item }) => (
                            <Photos pictures={item.poster_path} text='0.8' />
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
