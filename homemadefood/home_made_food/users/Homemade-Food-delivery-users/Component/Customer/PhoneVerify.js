import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,} from 'react-native';
import Logo from './Logo';
import VerifyPhn from '../VerifyPhn'
import Icons from 'react-native-vector-icons/Ionicons'
import {auth} from '../server/firebaseConfig'
import {fbase} from '../server/firebaseConfig'
import {FirebaseRecaptcha,
  FirebaseRecaptchaBanner,
  FirebaseRecaptchaVerifier,
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier,} from 'expo-firebase-recaptcha'


const {height,width}=Dimensions.get('window');



class PhoneVerify extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      PHONE:"",
      recaptchaToken: '123456'
    }
  }
   handler(e){
    
    const { recaptchaToken } = this.state;
    const applicationVerifier = new FirebaseRecaptchaVerifier(recaptchaToken);
    // recaptcha-container=12345
    const phonenumber="+91 93342 64497"
    //let appVerifier = 785674
    // console.log(this.state.PHONE);
    // const appVerifier = window.recaptchaVerifier;
    //var appVerifier = new fbase.auth.RecaptchaVerifier('recaptcha-container');
   auth.signInWithPhoneNumber(this.state.PHONE,applicationVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      //window.confirmationResult = confirmationResult;
      console.log( confirmationResult);
      this.props.navigation.navigate('OtpDriver')
      

      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  
   
    
    

}
   
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
     onChangeText={(PHONE)=>this.setState({PHONE})}
   />
    <Icons name={'md-call'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
  </View>
    <View>
        <TouchableOpacity style={styles.buttonHover} onPress={this.handler.bind(this)}>
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