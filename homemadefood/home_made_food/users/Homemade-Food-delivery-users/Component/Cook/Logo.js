import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity,St} from 'react-native';
import lg from '../../img/Customer/logo.png';
import Icons from 'react-native-vector-icons/Ionicons'
const {height,width}=Dimensions.get('window');




class Logo extends React.Component{
    render(){
         return(
        <View style={styles.container}>
               <StatusBar
                 backgroundColor='white'
                 barStyle='light-content'
                />
            <Image source={lg} style={{height:100,width:100}}/>
             <Text style={styles.txt}>Homemade <Text style={{color:'orange'}}>Food</Text></Text>
         <Text style={{fontSize:15,color:'#96948c',textAlign:'center'}}>Rain or shine, it's time to dine.</Text>
       </View>
           
      );  
    }
}


 

const styles = StyleSheet.create({
    container: {
     // flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
     
    },
    txt:{
      fontSize:30,
      fontFamily: 'sans-serif-light',
      color:'#828079'      //sans-serif-thin  sans-serif-light
    }
});
export default Logo;