import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import bg from '../img/img1.jpg';
import logo from '../img/logo.png';
import LoginComp from './LoginComp';






const {height,width}=Dimensions.get('window');
class Login extends React.Component{
   
 render(){
  return (
    <View> 
    <StatusBar
   backgroundColor='white'
   barStyle='light-content'
   />
   <ImageBackground source={bg}  style={styles.container}>
 
    <Image source={logo} style={styles.logo}/>
  <View style={styles.txt}>
     <Text style={{fontSize:25,fontStyle:'italic'}} >App</Text>
     <Text style={{color:'red',fontSize:25,fontStyle:'italic'}}>Name</Text>
  </View>
  <View style={styles.cont}>
    <LoginComp/>
  </View>
  
 </ImageBackground>
 </View>
  );
 }
 }


const styles = StyleSheet.create({
  container: {
    //flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:width,
    height:height,
    backgroundColor:'#edb374',
    
   
  },

  logo:{
      height:height/4,
      width:width/2,
      
      justifyContent:'center',
   
  },
  txt:{
    fontSize:25,
    fontStyle:'italic',
    flexDirection:'row',
  },
  cont:{
    width:300,
    height:350,
    backgroundColor:'white',
    borderBottomLeftRadius:20,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    borderBottomRightRadius:20
  }
});
export default Login;