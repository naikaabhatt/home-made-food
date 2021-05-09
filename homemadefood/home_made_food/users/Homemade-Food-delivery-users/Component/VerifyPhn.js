import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons'

const {height,width}=Dimensions.get('window');



class VerifyPhn extends React.Component{
   

    render(){
      return(
     <View style={styles.container}>
     <View  style={{top:100}}>
       
          <Text style={{fontSize:15,color:'#828079',textAlign:'center'}}>Enter your mobile number. We will send you</Text>
          <Text style={{fontSize:15,color:'#828079',textAlign:'center'}}>an OTP on your number</Text>
        
    </View>
        
    <View  style={styles.input}>
      
      <TextInput
        style={{marginLeft:30}}
        placeholder="Enter Your Mobile number "
        placeholderTextColor="#60605e"
        numeric
        keyboardType={'numeric'}
        underlineColorAndroid='transparent'
      />
      <Icons name={'md-call'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
    </View>
    
     </View>
      );
    }
}
    const styles = StyleSheet.create({
      container: {
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            
              
            },
        input: {
              
            //backgroundColor: '#dde8c9',
    padding: 2,
    marginTop:130,
    fontSize:25,
    borderWidth:.5,
    width:270,
    borderStyle:'solid',
    borderRadius:50,
    borderStyle:'dashed',
    justifyContent: 'center',
    height:45,
    borderColor:'#828079',
    backgroundColor:'#f2f0f0'
    
   },
          icon: {
            position:'absolute',
            top:10,
            left:5
            
          },
         
       
    });
    export default VerifyPhn;