import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,St} from 'react-native';
import bg from '../img/bg.jpg';

import logo from '../img/logo.png';
import Icons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const {height,width}=Dimensions.get('window');





class Logo extends React.Component{
    
    render(){
        return(
            
            <ImageBackground source={bg} style={styles.logo}>
           <StatusBar
            backgroundColor='white'
            barStyle='light-content'
            />
               <Image source={logo} style={styles.lg}/>
              
               <Text  style={styles.lgtxt}>Homemade Food delivery</Text>
            </ImageBackground>
        );
    }
}
export default Logo;

const styles = StyleSheet.create({
    logo:{
        width:width,
        height:height/4,
        backgroundColor:'white',
        //borderBottomRightRadius:155,
        //borderBottomLeftRadius:150,
        justifyContent:'center'
    },
    lg:{
        height:height/4,
        width:width/2,
        marginTop:height/4,
        marginLeft:width/4-10
     
    },
    lgtxt:{
        fontSize:20,
        color:'orange',
        textAlign:'center',
        height:100
    }
});