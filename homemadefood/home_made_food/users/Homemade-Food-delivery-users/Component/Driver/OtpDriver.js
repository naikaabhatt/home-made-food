import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Logo from './Logo';
import Otp from '../Otp'
import otpLogo from '../../img/otp.png'
import Icons from 'react-native-vector-icons/Ionicons'
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,St} from 'react-native';
const {height,width}=Dimensions.get('window');



class OtpDriver extends React.Component{
    render(){
         return(
             <View style={styles.container}>
             <View style={{top:50}}>
              <Image source={otpLogo}/>
             </View>
             <View style={{top:50}}>
                 <Otp/>
             </View>
             <View style={{marginTop:-50}}>
             <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('Drawer')}}>
         <Text style={{textAlign:'center'}}>Verify</Text>
        </TouchableOpacity>
             </View>
          </View>
         );
        }
    }

    const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
         height:'100%',
         width:'100%'
        },
        buttonHover: {
            marginTop: 20,
            borderRadius:50,
            paddingTop: 15,
            paddingBottom: 15,
            width:270,
            shadowColor: 'rgba(46, 229, 157, 0.4)',
            shadowOpacity: 1.5,
            elevation: 8,
            shadowRadius: 20 ,
            shadowOffset : { width: 1, height: 13},
            backgroundColor: 'orange',
            color: '#FFFFFF',
            justifyContent:'center',
            alignSelf:'center'
          },
    });
    export default  OtpDriver;