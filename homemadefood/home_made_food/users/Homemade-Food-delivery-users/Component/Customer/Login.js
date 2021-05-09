import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,useState} from 'react-native';
import Logo from './Logo';
import LoginComp from '../LoginComp'
import Icons from 'react-native-vector-icons/Ionicons'
const {height,width}=Dimensions.get('window');
import {auth} from '../server/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'





class Login extends React.Component{
  constructor(props){
    AsyncStorage.clear();
    super(props);
    this.state={
      showPass:true,
      press:false,
      userName:"",
      password:0,
      error:false,
      errorMSG:"Please provide correct Email and Password",
    }
    // AsyncStorage.getItem('toekn', (err, result) => {
    //   if(result!=null)
    //   {
    //     this.props.navigation.navigate('Drawer',{token:result});
    //   }
    // });
    
    AsyncStorage.clear();

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
  
  handleClick(e)
  {
    auth.signInWithEmailAndPassword(this.state.userName,this.state.password) .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      this.props.navigation.navigate('Drawer',{token:userCredential.user.uid});
      AsyncStorage.setItem("toekn",userCredential.user.uid)
      
      // ...
    }).catch((error) => {
      // var errorMessage = error.message;
      //this.setState({errorMSG:error.message})
      this.setState({error:true})
      console.log(this.state.errorMSG);
      
    });
    //this.props.navigation.navigate('Drawer');
  }

  

    render(){
      return(
        
     <View style={styles.container}>
        <View>
           <Logo/>
        </View>
     <View>
       {/* <LoginComp handleInput={this.userName}/> */}

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
      <View>
      <TouchableOpacity style={styles.buttonHover} onPress={this.handleClick.bind(this)}>
     
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
    export default Login;