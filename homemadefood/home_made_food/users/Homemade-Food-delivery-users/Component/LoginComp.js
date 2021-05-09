import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Button,Image,Dimensions,TextInput, TouchableOpacity,St} from 'react-native';
import bg from '../img/bg.jpg';
import Register from './Register'
//import StackComp from './Driver/Navigation/StackComp'
import Icons from 'react-native-vector-icons/Ionicons'
const {height,width}=Dimensions.get('window');




class LoginComp extends React.Component{
  
  
constructor(props){
  super(props);
  this.state={
    showPass:true,
    press:false,
    userName:"",
    password:0,
  }
}
showPass=()=>{
  if(this.state.press==false){
    this.setState({showPass:false,
      press:true})
  }else{
    this.setState({showPass:true,press:false})
  }
  console.log(this.state.password);
}


 render(){
 
 return (
 <View style={styles.container}>
 <StatusBar
   backgroundColor='white'
   barStyle='light-content'
 />
      <View  style={styles.input}>
      
        <TextInput
          style={{marginLeft:30}}
          placeholder="Username "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        <Icons name={'ios-person'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
      </View>
      <View   style={styles.input}>
        <TextInput
         style={{marginLeft:30}}
          placeholder="Password "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
         secureTextEntry={this.state.showPass}
         onChangeText={(password)=>this.setState({password})}
        />
        <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
        <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{top:9}}  >
        
        <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.eye}/>
        
   </TouchableOpacity>
  
      </View>
      
     
        
          
          
      </View>
    
  );
 }
}


//onPress={()=>this.props.navigation.navigate('Register')}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
   
  },
  img:{
    height:270,
    width:width,
    borderBottomLeftRadius:100
  },
  input: {
    
    //backgroundColor: '#dde8c9',
    padding: 2,
    marginTop:15,
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
  eye:{
    position:'absolute',
    top:-25,
    right:10
  },
  
 
});
export default LoginComp;

