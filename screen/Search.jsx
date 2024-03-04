import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Photos from "../Components/Photos";

export default function Search({navigation}) {

    const [Searched, setSearched] = useState([]);
    const [Search, setSearch] = useState('');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
    };

    const searchMovies = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${Search}`, options);
          const data = await response.json();
          setSearched(data.results || []);
        } catch (error) {
          console.error(error);
        }
    };
    
    
    useEffect(() => {
        if (Search.length > 0) {
            searchMovies();
        } else {
            setSearched([]);
        }
    },[Search]);

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:'#1f2123'}}>
            <ScrollView>
                <TextInput
                    placeholder={'Search any movie Genre or cast'}
                    mode={'outlined'}
                    textColor='white'
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    style={{height: 50, marginTop: 50,marginRight: 20, backgroundColor: '#303234', borderRadius: 10, borderColor: "white", fontSize: 18, width: "100%", color: "white"}}
                    right={<TextInput.Icon icon={'magnify'} />}
                    onChangeText={text => setSearch(text)} // Update Search state
                /> 

                <View style={{height: 70}}></View>

                <View style={{backgroundColor:'#26282C',  alignContent:"center", alignItems:"center", justifyContent:"center"}} >
                    {Searched.length === 0 ? ( // Show loading indicator or a message if no results found
                        <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20}}>Loading...</Text>
                    ) : (
                        <FlatList
                            horizontal={true}
                            data={Searched}
                            keyExtractor={item => item.id.toString()}
                            ItemSeparatorComponent={() => <View />}
                            renderItem={({ item }) => (
                                <Photos pictures={item.poster_path} text='0.8' />
                            )}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
