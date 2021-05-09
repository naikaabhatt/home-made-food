import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'


// class PersonelInfo extends React.Component{
//   constructor(props)
//   {
//     super(props);

//   }
const RaiseQuestion=({navigation,route})=>{
    // render(){
        return(
      <View style={styles.container}>
      
      <View style={{top:-50}}>
      <Text style={{color:'#404052',fontSize:25,textAlign:'center'}}>Raise Your Question</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>write down your Question in the box </Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>and then click On the "send" button below</Text>
        </View>
      <View style={styles.inputCont}>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="Write  your question here... "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
        />
        
         </View>
         </View>
      <TouchableOpacity style={styles.buttonHover} onPress={() =>{this.props.navigation.navigate('Drawer')}}>
     
     <Text style={{textAlign:'center'}}>Send</Text>
     </TouchableOpacity>
      </View>
        );
   // }
    }
    
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      height:'100%',
      width:'100%',
      
    },
    cnt:{
        width:120,
        height:120,
        backgroundColor:'white',
        borderRadius:60,
        borderWidth:1,
        borderStyle:'dashed',
        justifyContent: 'center',
      alignItems: 'center',
    },
    
    inputCont:{
        height:200,
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        marginTop:25,
    },
    intxt:{
        height:200,
        width:320,
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
export default  RaiseQuestion;