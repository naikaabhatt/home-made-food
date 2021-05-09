import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import lg from '../../../img/Customer/pswd.png'

class PswdChng extends React.Component{
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
        return(
             <View style={styles.container}>
               <StatusBar
                 backgroundColor='black'
                 barStyle='light-content'
                />
               <View style={styles.upper}>
                 <Image source={lg} style={styles.img}/>
                 <Text style={{color:'#404052',fontSize:25,textAlign:'center'}}>Change Your Password</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>Enter your new password  and click</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>the "save" button below</Text>
               </View>
     <View style={styles.inputCont}>
         <View style={styles.intxt}>
         
         <TextInput
                 style={{marginLeft:30,marginTop:10}}
                  placeholder="Current Password "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'default'}
                  underlineColorAndroid='transparent'
                 secureTextEntry={this.state.showPass}
                />
                <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{ position:'absolute',
    top:10,
    left:5}}/>
    <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:9,top:9}}  >
                
                <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{ position:'absolute',
    top:-20,
    right:10}}/>
                
           </TouchableOpacity>
         </View>
         <View style={styles.intxt}>
         
         <TextInput
                 style={{marginLeft:30,marginTop:10}}
                  placeholder="New Password "
                  placeholderTextColor="#60605e"
                  numeric
                  keyboardType={'default'}
                  underlineColorAndroid='transparent'
                 secureTextEntry={this.state.showPass}
                />
                <Icons name={'ios-lock-closed'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{ position:'absolute',
    top:10,
    left:5}}/>
    <TouchableOpacity onPress={this.showPass.bind(this)} hitSlop={{right:9,top:9}}  >
                
                <Icons  name={this.state.press==false?'ios-eye':'ios-eye-off'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{ position:'absolute',
    top:-20,
    right:10}}/>
                
           </TouchableOpacity>
         </View>
         
      </View>
      <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('Drawer')}}>
     
     <Text style={{textAlign:'center'}}>Save</Text>
     </TouchableOpacity>
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
          width:'100%',
          
        },
        upper:{
            backgroundColor:'white',
            height:'25%',
            width:'100%',
            alignSelf:'flex-start',
            justifyContent: 'center',
          alignItems: 'center',
    
        },
        img:{
            height:150,
            width:150,
        },
        inputCont:{
            height:200,
            width:"100%",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'white',
            marginTop:35,
        },
        intxt:{
            height:45,
            width:270,
            backgroundColor:'#edf0ee',
            borderRadius:25,
            borderStyle:'dashed',
            borderWidth:1,
            marginTop:10
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
    }
    );
    export default PswdChng;