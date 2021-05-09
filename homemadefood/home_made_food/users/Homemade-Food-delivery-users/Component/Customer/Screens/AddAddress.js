import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import {db} from '../../server/firebaseConfig'


// class PersonelInfo extends React.Component{
//   constructor(props)
//   {
//     super(props);

//   }
const AddAddress=({navigation,route})=>{
    // render(){
const [token,setToken]=useState(route.params.token.token);
const [houseaddress,setHouseAddress]=useState();
const [pin,setPin]=useState();
const [city,setCity]=useState();
const [phone,setPhone]=useState();
const [state,setState]=useState();
const [landmark,setLandmark]=useState();


const saveaddress= async()=>{
              var ref = db.ref('server/profile')
              var usersRef = ref.child("customer");
              var usertoken=usersRef.child(token);
              usertoken.child("address").set({
                HouseAddress:houseaddress,
                Pin:pin,
                City:city,
                Phone:phone,
                State:state,
                Landmark:landmark  
              });

           await navigation.navigate('My Account')  
}

    console.log(token);
        return(
      <View style={styles.container}>
      
      <View style={{top:-50}}>
      <Text style={{color:'#404052',fontSize:25,textAlign:'center'}}>Add Address</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>Enter Your Address information and then click</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>On the "save" button below</Text>
        </View>
      <View style={styles.inputCont}>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="House/Flat/Block No.(Required)*  "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(houseaddress)=>{setHouseAddress(houseaddress)}}
        />
        
         </View>
         <View style={{ height:45,
      width:150,
      backgroundColor:'#edf0ee',
     // borderRadius:25,
      borderStyle:'dashed',
      borderBottomWidth:1,
      marginTop:10,
      marginLeft:-170}}>
         
         <TextInput
          style={{marginLeft:10,marginTop:15}}
          placeholder="Pin* "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'Numeric'}
          underlineColorAndroid='transparent'
          onChangeText={(pin)=>{setPin(pin)}}
        />
        
         </View>
         <View style={{ height:45,
      width:150,
      backgroundColor:'#edf0ee',
     // borderRadius:25,
      borderStyle:'dashed',
      borderBottomWidth:1,
      marginTop:-45,
      marginLeft:150}}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="City*"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(city)=>{setCity(city)}}
        />
        
         </View>
         <View style={{ height:45,
      width:150,
      backgroundColor:'#edf0ee',
     // borderRadius:25,
      borderStyle:'dashed',
      borderBottomWidth:1,
      marginTop:10,
      marginLeft:-170}}>
         
         <TextInput
          style={{marginLeft:10,marginTop:15}}
          placeholder="State (Required)*"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(state)=>{setState(state)}}
        />
        
         </View>
         <View style={{ height:45,
      width:150,
      backgroundColor:'#edf0ee',
     // borderRadius:25,
      borderStyle:'dashed',
      borderBottomWidth:1,
      marginTop:-45,
      marginLeft:150}}>
         
         <TextInput
          style={{marginLeft:10,marginTop:15}}
          placeholder="Phone Number "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'Numeric'}
          underlineColorAndroid='transparent'
          onChangeText={(phonen)=>{setPhone(phonen)}}
        />
       
         </View>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="Landmark(Required)*"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(landmark)=>{setLandmark(landmark)}}
        />
        
         </View>
        
      </View>
      <TouchableOpacity style={styles.buttonHover} onPress={saveaddress}>
     
     <Text style={{textAlign:'center'}}>Save Address</Text>
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
    photo:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderRadius:50,
        top:15
        
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
        height:45,
        width:320,
        backgroundColor:'#edf0ee',
        //borderRadius:25,
        borderStyle:'dashed',
        borderBottomWidth:1,
        marginTop:10
    },
    intxt1:{
      height:45,
      width:100,
      backgroundColor:'#edf0ee',
     // borderRadius:25,
      borderStyle:'dashed',
      borderBottomWidth:1,
      marginTop:10,
   
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
export default  AddAddress;