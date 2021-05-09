
import React from 'react';
import pizaa from '../Img/pizza.jpg'
// import all the components we are going to use
import { Button,Image,SafeAreaView,Dimensions, View, StyleSheet,TouchableOpacity, Text, Linking ,TextInput, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useState } from 'react';
const {height,width}=Dimensions.get('window');

const App = () => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
        Orders
        </Text>
        <View style={{marginLeft:30}}>

        <Text style={{fontSize:20,marginTop:10}}>Orders Details:</Text>
        </View>
        <TouchableOpacity style={styles.buttonHover} onPress={() => Alert.alert('button pressed')} >
         <Text style={{textAlign:'center'}}>Accepte all</Text>
        </TouchableOpacity>
        
        <View style={{ borderBottomColor: 'gray',marginTop:40,marginBottom:10,borderBottomWidth: 3,}}/>

     
        
        <View style={styles.fixToText}>
          <Button title="In-Process"  onPress={() => Alert.alert('button pressed')} />
          <Button title="Pending" onPress={() => Alert.alert(' button pressed')} />
           <Button title="Completed" onPress={() => Alert.alert('button pressed')} />
        </View>
     
       
        <View style={{ marginTop:20}}>
        <Image
         source={pizaa}    resizeMode={'cover'}
        style={{width: 150,height: 150,marginTop:20,marginLeft:5}}/>
       <View 
       style={{ position: 'absolute',  top:20,left:160, right: 0, height: 160, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: "bold",fontSize:20,marginBottom:5}}>Pizaa</Text>
        <Text>Rs : 100</Text>
        <Text>Qty : 1</Text>
        <Text>Prepapration Time : 30 min</Text>
        <Text>Customer name : XXYYZZ</Text>
        <Text>Prepapration Time : 30 min</Text>
         <Text>Status : In-process </Text>
        <Text>
          <Button title="COmplete" style={{top:0,alignItems: 'center',justifyContent: 'left'}}
    icon={<Icon name="arrow-right"size={15}color="white"/>} onPress={() => Alert.alert('button pressed')} />
    </Text>
    
    </View>
   
    


 
 <View style={{ marginTop:20}}>
        <Image
         source={pizaa}    resizeMode={'cover'}
        style={{width: 150,height: 150,marginTop:20,marginLeft:5}}/>
       <View 
       style={{ position: 'absolute',  top:20,left:160, right: 0, height: 160, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: "bold",fontSize:20,marginBottom:5}}>Veggies Pizaa</Text>
        <Text>Rs : 100</Text>
        <Text>Qty : 1</Text>
        <Text>Prepapration Time : 70 min</Text>
        <Text>Customer name : XXYYZZ</Text>
        <Text>Prepapration Time : 30 min</Text>
         <Text>Status : In-process</Text>    
          <Text>
          <Button title="Complete" onPress={() => Alert.alert('button pressed')} 
           style={{top:0,alignItems: 'center',justifyContent: 'left'}}
            icon={<Icon  name="arrow-right"size={15}color="white"/>} />
    </Text>   
    </View>
    
    
    
</View>
    
</View>
      </View>
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
 
  buttonHover: {
    marginTop: 20,
    borderRadius:50,
    paddingTop: 15,
    paddingBottom: 15,
    width:100,
    position: 'absolute',right: 5,top: 50,
    shadowColor: 'gray',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
    backgroundColor: 'orange',
    color: '#FFFFFF',
    justifyContent:'center',
    alignSelf:'center'
  },
   
  
  titleStyle: {
    fontSize: 30,
    margin: 10,
    textAlign:'center',
    color:'orange'
  },
   fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  
});
