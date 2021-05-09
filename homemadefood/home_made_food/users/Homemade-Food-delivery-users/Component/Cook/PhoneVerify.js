import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,} from 'react-native';
import Logo from './Logo';
import VerifyPhn from '../VerifyPhn'
import Icons from 'react-native-vector-icons/Ionicons'

const {height,width}=Dimensions.get('window');



class PhoneVerify extends React.Component{
   
 render(){
      return(
        <View style={styles.container}>
     <View style={{marginTop:10}}>
       <Logo/>
     </View>
     <View >
       
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
    <View>
        <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('OtpDriver')}}>
         <Text style={{textAlign:'center'}}>Get OTP</Text>
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
          justifyContent:'center'
        },
        input: {
              
          //backgroundColor: '#dde8c9',
  padding: 2,
  marginTop:10,
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
    export default PhoneVerify;