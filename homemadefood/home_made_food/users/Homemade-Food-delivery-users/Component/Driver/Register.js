import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,} from 'react-native';
import Logo from './Logo';
import RegisterComp from '../RegisterComp'
import Icons from 'react-native-vector-icons/Ionicons'

const {height,width}=Dimensions.get('window');



class RegisterDriver extends React.Component{
   

    render(){
      return(
     <View style={styles.container}>
    
        <View style={{top:-10}} >
            <Logo/>
            </View>
          <View>
            <RegisterComp/>
          </View>
          <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('PhoneVerify')}}>
            <Text style={{textAlign:'center'}}>Sign Up</Text>
      </TouchableOpacity>
      </View>
       
       
      );
    }
}
    const styles = StyleSheet.create({
        container: {
          top:10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        width:'100%',
        height:'100%'
        },
        buttonHover: {
          marginTop: 20,
          borderRadius:50,
          paddingTop: 15,
          paddingBottom: 15,
          width:270,
          shadowColor: 'rgba(46, 229, 157, 0.4)',
          shadowOpacity: 1.5,
          elevation: 6,
          shadowRadius: 20 ,
          shadowOffset : { width: 1, height: 15},
          backgroundColor: 'orange',
          color: '#FFFFFF',
          justifyContent:'center'
        },
       
    });
    export default RegisterDriver;