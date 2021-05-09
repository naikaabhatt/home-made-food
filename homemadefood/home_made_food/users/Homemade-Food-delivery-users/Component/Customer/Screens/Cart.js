import * as React from 'react';
import {useState} from 'react'
import { Text, View, StyleSheet,FlatList ,TouchableOpacity,Dimensions,Image} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'
const {height,width}=Dimensions.get('window');
import {db} from "../../server/firebaseConfig"
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import cart from '../Const/cart'
// let cart = [
 
// ];

export default function Cart({navigation}) {

  // let cart = [];
  //  React.useEffect(() => {

  //   AsyncStorage.getItem('toekn', (err, result) => {
  //     if(result!=null)
  //     {
  //         db.ref('server/profile/customer/'+result+'/cart').on('value', (snapshot) => {
  //                   for(var i in snapshot.val())
  //                   cart.push(snapshot.val()[i]);
    
  //            });
  //     }
  //   });
    
  // });


const [cards,setnote]=useState(cart);
let [totalp,settotal]=useState(1);
let [flag,setflag]=useState(1);




const removeTask=(index)=>{
  const newcart=[...cards];
  newcart.splice(index, 1);
  setnote(newcart);
  setflag(1);

}

const addquantity=(index)=>{
  const newcart=[...cards];
  newcart[index].quantiry++;
  newcart[index].price+=newcart[index].fixedprice;
  setnote(newcart);
  setflag(1);
}

const removeqantity=(index)=>{
  const newcart=[...cards];
 if(newcart[index].quantiry>0){
  newcart[index].quantiry--;
  newcart[index].price-=newcart[index].fixedprice;
  setnote(newcart);
  setflag(1);
 }
 if(newcart[index].quantiry==0)
 {
   const newcart=[...cards];
  newcart.splice(index, 1);
  setnote(newcart);
  setflag(1);
 }


}
const totalprice=()=>
{
  if(flag==1){
    setflag(0);
cards.forEach(el=>{
    totalp+=el.price;
  })


  

settotal(totalp);
  }
}

const paymentCheckout=()=>{
  //console.log("payment");
  totalprice();
    navigation.navigate('Payment',{Cartdata:cart,totalprice:totalp});


}

// const [customername,Setcustomername]=React.useState();
// const [customerphone,setcutomerphone]=React.useState();
// const [address,setcustomeraddress]=React.useState();
const Cod=async()=>{
  let customername="";
  let customerphone="";
  let address=[];

  console.log(cards);
  AsyncStorage.getItem('toekn', (err, result) => {
    if(result!=null)
    {
      db.ref('server/profile/customer/'+result).on('value', (snapshot) => {
        customername=snapshot.val().name;
        address=snapshot.val().address;
        customerphone=snapshot.val().phone;
       

      });

     
                cards.forEach(c=>{
                  var ref = db.ref('server/profile')
                  var usersRef = ref.child("order/");
                  var usertoken=usersRef.child(c.cookId);
                  usertoken.child(result).set({
                        foodname:c.name,
                        foodimage:c.image,
                        foodquantity:c.quantiry,
                        cName:customername,
                        cPhone:customerphone,
                        caddress:address,
                        status:"pending"
                   
                });
              })
      }
    });



await alert("order is Placed Thankyou!!!")

 



}


const cartList=()=>{
  return(
    <FlatList
              data={cards}
              showsVerticalScrollIndicator={false}
              renderItem={({ item,index }) => (
                <View style={{ shadowColor: 'rgba(46, 229, 157, 0.4)',
                                shadowOpacity: 2,
                                elevation: 8,
                                shadowRadius: 50 ,
  shadowOffset : { width: 1, height: 13},borderTopLeftRadius:50,borderColor:'#e1e3e2',borderBottomLeftRadius:50,height:100,width:width-15,marginTop:25,alignSelf:'center',borderWidth:1}}>
                {/* <View style={{width:100,height:100,backgroundColor:'red',borderRadius:50}}> */}
                    <Image source={{uri:item.image}} style={{width:100,height:100,borderRadius:50}}></Image>
                {/* </View> */}
                <View style={{marginLeft:width/3,marginTop:-100}}>
                <Text style={{fontSize:20}}>{item.name}</Text>
                </View>
                <View style={{marginLeft:width/3,marginTop:20}}>
                <Text style={{color:'#37cc64'}}>{item.price} INR</Text>
                </View>
                <Text style={{marginLeft:250,marginTop:-40}}>{item.quantiry} 
                <View style={{marginLeft:100}}>
                <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}} onPress={()=>{addquantity(index)}}><Text style={{fontSize:20,marginLeft:-10}}>  +</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginLeft:10}}>
                <TouchableOpacity style={{marginLeft:10,width:30,height:30,borderRadius:15,backgroundColor:'orange',justifyContent:'center',alignContent:'center',alignItems:'center'}} onPress={()=>{removeqantity(index)}}><Text style={{fontSize:30,textAlign:'center'}}>-</Text>
                </TouchableOpacity>
                </View>
                </Text>
                <TouchableOpacity style={{shadowColor: 'rgba(46, 229, 157, 0.4)',
  shadowOpacity: 1.5,
  elevation: 8,
  shadowRadius: 20 ,
  shadowOffset : { width: 1, height: 13},
  backgroundColor: '#c2ccb6',borderColor:"#bcbdbb",marginLeft:width-90,height:30,width:60,borderWidth:1}} onPress={()=>{removeTask(index)}}><Text style={{textAlign:'center'}}>Remove</Text>
                </TouchableOpacity>
                
                </View>
                
               )}
              />
  );

  
}


  return (
    <View>{cartList()}
    <TouchableOpacity style={{width:width/6,height:30,backgroundColor:'green',marginLeft:width-60,marginTop:10,borderRadius:30}} onPress={()=>{totalprice()}}><Text style={{textAlign:'center'}}>Total:{totalp}</Text>
                </TouchableOpacity> 
    
    <TouchableOpacity style={styles.buttonHover} onPress={()=>{paymentCheckout()}}>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>Checkout</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonHover} onPress={()=>{Cod()}}>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>Cod</Text></TouchableOpacity>
    
    </View>
    
  )
    
}
const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  height:'100%',
  width:'100%',
  
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
  justifyContent:'center',marginLeft:width/8
},
})