import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons'
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,St} from 'react-native';
const {height,width}=Dimensions.get('window');



class Otp extends React.Component{
    constructor(){
     super();
     this.state={
         pin1:'',
         pin2:'',
         pin3:'',
         pin4:''
     }
    }
   componentDidMount=()=>{
       this.refs.pin1ref.focus()
   }


    render(){
        const {pin1,pin2,pin3,pin4}=this.state;
         return(
             <View>
             <Text style={{color:'#828079',textAlign:'center',fontSize:30}}>Verification Code <Text  style={{color:'orange'}}>OTP</Text></Text>
             <Text style={{color:'#828079',textAlign:'center',fontSize:15}}>Please type the verification code</Text>
             <Text  style={{color:'#828079',textAlign:'center',fontSize:15}}> sent to your number</Text>
             <View style={{flex:.6,justifyContent:'space-evenly',flexDirection:'row'}}>
                <TextInput
                ref={'pin1ref'}
                onChangeText={(pin1)=>{
                    this.setState({pin1:pin1})
                    if(pin1!=''){
                      this.refs.pin2ref.focus()
                    }
                }}
                value={pin1}
                maxLength={1}
                style={styles.inputTxt}
                numeric keyboardType={'numeric'}
                />
                 <TextInput
                ref={'pin2ref'}
                onChangeText={(pin2)=>{
                    this.setState({pin2:pin2})
                    if(pin2!=''){
                      this.refs.pin3ref.focus()
                    }
                }}
                value={pin2}
                maxLength={1}
                style={styles.inputTxt}
                numeric keyboardType={'numeric'}
                />
                <TextInput
                ref={'pin3ref'}
                maxLength={1}
                onChangeText={(pin3)=>{
                    this.setState({pin3:pin3})
                    if(pin1!=''){
                      this.refs.pin4ref.focus()
                    }
                }}
                value={pin3}
                style={styles.inputTxt}
                numeric keyboardType={'numeric'}
                />
                <TextInput
                ref={'pin4ref'}
                onChangeText={(pin4)=>this.setState({pin4:pin4})}
                value={pin4}
                maxLength={1}
                style={styles.inputTxt}
                numeric keyboardType={'numeric'}
                />
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
         
        },
        inputTxt:{
            backgroundColor:'#f0eeeb',
            fontWeight:'600',
            alignSelf:'center',
            padding:10,
            fontSize:20,
            height:55,
            width:'15%',
            borderRadius:15,
            borderWidth:1,
            borderColor:'orange',
            marginTop:40,
            textAlign:'center'
        },
       
    });
    export default  Otp;