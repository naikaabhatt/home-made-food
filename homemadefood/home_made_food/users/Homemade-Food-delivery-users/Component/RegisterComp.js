import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Button,Image,Dimensions,TextInput, TouchableOpacity,KeyboardAvoidingView,ScrollView, Keyboard} from 'react-native';
import bg from '../img/bg.jpg';
import Register from './Register'
//import StackComp from './Driver/Navigation/StackComp'
import Icons from 'react-native-vector-icons/Ionicons'
const {height,width}=Dimensions.get('window');



class RegistrationComp extends React.Component{
constructor(props){
  super(props);
  this.state={
    showPass:true,
    press:false
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
 render(){
 
 return (
 <View style={styles.container}>
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
                />
                <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
                <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:16,top:16}}  >
                
                <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={styles.eye}/>
                
           </TouchableOpacity>
           </View>
      
      </ScrollView>
      
       </KeyboardAvoidingView>
          
          
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
    height:height/2,
    width:width
   
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
export default RegistrationComp;

