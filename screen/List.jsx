import React from 'react'
import { View, Text,Image } from 'react-native'

export default function List(navigation) {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#26282C'}}> 
    <View style={{backgroundColor:'#121212'}}>
    <View styles={{marginTop: 20, backgroundColor: 'black', alignItems: 'center'}}>
        <Image source={require('../assets/muvilogo.jpg')} style={{ width: 180, height: 53 }} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, alignItems: 'center'}}>
          <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#f2b817'}}>My list</Text>
          <Text style={{backgroundColor:'#f2b817', borderRadius:10, height:10, width:50}}></Text>

          </View>
            
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Downloaded</Text>
        </View>
    </View>
    <View style={{backgroundColor:'#26282c'}}> 
        
    </View>
        
    
        
    </View>
  )
}

