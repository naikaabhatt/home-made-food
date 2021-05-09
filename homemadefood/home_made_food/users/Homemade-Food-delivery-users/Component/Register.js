import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {KeyboardAvoidingView,TouchableOpacity, StyleSheet,TextInput, Text, View,ScrollView, ImageBackground ,Image,Dimensions} from 'react-native';
import Logo from './Logo'
import Icons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';






const {height,width}=Dimensions.get('window');
class Register extends React.Component{
  constructor(){
    super();
    this.state={
      showPass:true,
      press:false
    }
  }
  showPass=()=>{
    if(this.state.press==false){
      this.setState({showPass:false,
        press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
  }
 render(){

  return (
    <LinearGradient colors={['transparent', '#41cc90', 'blue']}style={styles.container}>
    <View > 
  <Logo/>
 
  <KeyboardAvoidingView style={{flex:2,flexDirection:'column',justifyContent:'center'}} behavior="padding" enabled keyboardVerticalOffset={5}>
  
  <ScrollView style={styles.cont}>
  <View  style={styles.input}>
      
        <TextInput
          style={{left:23,top:10}}
          placeholder="Name "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
        />
        <Icons name={'ios-person'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
      
     </View>
     <View  style={styles.input}>
      
        <TextInput
          style={{left:23,top:10}}
          placeholder="Email "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'email-address'}
          underlineColorAndroid='transparent'
        />
        <Icons name={'ios-mail'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
      
     </View>
     <View  style={styles.input}>
      
        <TextInput
          style={{left:23,top:10}}
          placeholder="Phone "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
          underlineColorAndroid='transparent'
        />
        <Icons name={'md-call'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
      
     </View>
     <View   style={styles.input}>
        <TextInput
         style={{left:23,top:10}}
          placeholder="Password "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
         secureTextEntry={this.state.showPass}
        />
        <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
        <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:9,top:9}}  >
        
        <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.eye}/>
        
   </TouchableOpacity>
   </View>
   <TouchableOpacity style={styles.btnLogin}>
        <Text style={{textAlign:'center'}}>Sign up</Text>
        </TouchableOpacity>
        
     </ScrollView>
    
     </KeyboardAvoidingView>
    
  </View>
  </LinearGradient>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff1cc',
    alignItems: 'center',
    justifyContent: 'center',
   height:height, 
    
    
  },
  logo:{
    top:30,
    height:height/4,
    width:width/2,
    
    justifyContent:'center',
 
},
txt:{
  fontSize:25,
  fontStyle:'italic',
  flexDirection:'row',
},
input: {
    
  //backgroundColor: '#dde8c9',
  padding: 4,
  marginTop:15,
  fontSize:25,
  borderBottomWidth:2,
  width:270,
  borderStyle:'solid',
 // borderRadius:50,
  justifyContent: 'center',
  height:45,
  marginLeft:15,
  marginRight:15
},
icon: {
  position:'absolute',
  top:20,
  
},
cont:{
  marginTop:100,
  backgroundColor:'white',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  marginLeft:5
},
eye:{
  position:'absolute',
  top:-15,
  right:10
},
btnLogin:{
  //padding: 2,
  marginTop:50,
  fontSize:25,
  borderWidth:1,
  width:100,
  borderStyle:'solid',
  borderRadius:50,
  justifyContent: 'center',  
  height:45,
  backgroundColor:"tomato",
 marginLeft:width/4,
},
});
export default Register;