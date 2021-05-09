import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground,ScrollView ,Image,Dimensions,TextInput, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Logo from './Logo';
import RegisterComp from '../RegisterComp'
import Icons from 'react-native-vector-icons/Ionicons'
import {auth} from '../server/firebaseConfig'
import {db} from '../server/firebaseConfig'


const {height,width}=Dimensions.get('window');



class RegisterDriver extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showPass:true,
      press:false,
      NAME:"",
      EMAIL:"",
      PHONE:0,
      PASSWORD:0,
      CONFIRMPASSWORD:0,

    }
    console.log(this.props.na)
  }
  showPass=()=>{
    if(this.state.press==false){
      this.setState({showPass:false,
        press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
  }

  async handler(e){
    console.log("Name: "+this.state.NAME+" Password: "+ this.state.PASSWORD+" Phone: "+this.state.PHONE+" Email: "+this.state.EMAIL);
   await  auth.createUserWithEmailAndPassword(this.state.EMAIL, this.state.PASSWORD)
    .then((userCredential) => {
      console.log(userCredential.user.uid);
      var usercrd=userCredential.user.uid;
      var ref = db.ref('server/profile')
      var usersRef = ref.child("customer");
      usersRef.child(usercrd).set({
         name:this.state.NAME,
         phone:this.state.PHONE,
         EMAIL:this.state.EMAIL
      });

      this.props.navigation.navigate('PhoneVerify');
      
    })
  // this.props.navigation.navigate('PhoneVerify');
    
  }
   

    render(){
      return(
     <View style={styles.container}>
    
        <View style={{top:-10}} >
            <Logo/>
            </View>
          <View>
            {/* <RegisterComp/> */}

            <StatusBar
   backgroundColor='white'
   barStyle='light-content'
 />
          
        <KeyboardAvoidingView style={{flex:1,flexDirection:'column',justifyContent:'center'}} behavior="height" enabled keyboardVerticalOffset={5}>
           <ScrollView>
            <View  style={styles.input}>
                
                <TextInput
                  style={{marginLeft:30}}
                  placeholder="Name "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'default'}
                  underlineColorAndroid='transparent'
                  onChangeText={(NAME)=>{this.setState({NAME})}}
                />
                <Icons name={'ios-person'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
              
             </View>
             <View  style={styles.input}>
              
                <TextInput
                  style={{marginLeft:30}}
                  placeholder="Email "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'email-address'}
                  underlineColorAndroid='transparent'
                  onChangeText={(EMAIL)=>{this.setState({EMAIL})}}
                />
                <Icons name={'ios-mail'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
              
             </View>
             <View  style={styles.input}>
              
                <TextInput
                  style={{marginLeft:30}}
                  placeholder="Phone "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'numeric'}
                  underlineColorAndroid='transparent'
                  onChangeText={(PHONE)=>{this.setState({PHONE})}}
                />
                <Icons name={'md-call'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
              
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
                 onChangeText={(PASSWORD)=>{this.setState({PASSWORD})}}
                />
                <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
                <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:9,top:9}}  >
                
                <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.eye}/>
                
           </TouchableOpacity>
           </View>
           <View   style={styles.input}>
                <TextInput
                 style={{marginLeft:30}}
                  placeholder="Confirm Password "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'default'}
                  underlineColorAndroid='transparent'
                 secureTextEntry={this.state.showPass}
                 onChangeText={(CONFIRMPASSWORD)=>{this.setState({CONFIRMPASSWORD})}}
                />
                <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
                <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:16,top:16}}  >
                
                <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.eye}/>
                
           </TouchableOpacity>
           </View>
      
      </ScrollView>
      
       </KeyboardAvoidingView>
          
          
          </View>
          <TouchableOpacity style={styles.buttonHover} onPress={this.handler.bind(this)}>
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
    export default RegisterDriver;