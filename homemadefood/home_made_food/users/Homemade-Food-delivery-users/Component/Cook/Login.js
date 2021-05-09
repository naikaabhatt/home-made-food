import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,} from 'react-native';
import Logo from './Logo';
import LoginComp from '../LoginComp'
import Icons from 'react-native-vector-icons/Ionicons'





class Login extends React.Component{


    render(){
      console.log(this.props.navigation);
      return(
        
     <View style={styles.container}>
        <View>
           <Logo/>
        </View>
     <View>
       <LoginComp/>
      </View>
      <View>
      <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('Drawer')}}>
     
      <Text style={{textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      <View style={{top:20}}>
      <Text style={{color:'blue',textAlign:'center',fontSize:15}}>Forgot Password</Text>
      <Text style={{color:'grey',textAlign:'center',fontSize:15}}>Not a user?</Text>
      <TouchableOpacity  onPress={() =>{this.props.navigation.navigate('Register')}}>
      <Text style={{color:'blue',textAlign:'center',fontSize:15}}>Create Account</Text>
      </TouchableOpacity>
      </View>
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
          flex: 1,
          
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
        frgpswd:{
          justifyContent:'center',
          fontSize:10,
          top:5,
          
         
        }
       
    });
    export default Login;