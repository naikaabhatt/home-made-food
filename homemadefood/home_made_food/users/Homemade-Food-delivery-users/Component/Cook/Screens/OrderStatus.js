

import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image,Dimensions, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {height,width}=Dimensions.get('window');


class Home extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
             <View style={{ shadowColor: 'rgba(46, 229, 157, 0.4)',
                                shadowOpacity: 2,
                                elevation: 8,
                                shadowRadius: 50 ,
  shadowOffset : { width: 1, height: 13},
  borderColor:'#e1e3e2',
  
  height:200,width:width-10,
  marginTop:25,
  alignSelf:'center',
  borderWidth:1,justifyContent:'center',flexDirection:'row'}}>
                 <View style={{height:130,width:105,backgroundColor:"yellow",marginLeft:0,marginTop:35}}>

                 </View>
                 <View style={{marginTop:10,height:180,width:200,backgroundColor:"white",left:10,flexDirection:"column"}}>
                      <Text style={{fontSize:20}}>Title</Text>
                      <Text style={{fontSize:15}}>Price:</Text>
                      <Text style={{fontSize:15}}>Customer name:</Text>
                      <Text style={{fontSize:15}}>Customer ph no.:</Text>
                      <Text style={{fontSize:15}}>Address:</Text>
                      <View style={{flexDirection:'row',  justifyContent: 'space-between',marginTop:10}}>
                      <TouchableOpacity style={{width:90,height:50,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:20}}><Text style={{fontSize:20,color:'white'}}>Accept</Text></TouchableOpacity>
                      <TouchableOpacity style={{width:90,height:50,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:20}}><Text style={{fontSize:20,color:'white'}}>Decline</Text></TouchableOpacity>
                      </View>
                </View>
                 
                 
                 
                 </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Home;