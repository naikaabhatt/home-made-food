import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,ScrollView,TouchableOpacity,Vibration} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {db} from '../../server/firebaseConfig';
//mport foods from '../Const/Foods';
//import COLORS from '../../consts/colors';
//import {SecondaryButton} from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsScreen = ({navigation, route}) => {
  const items = route.params.foods;
  console.log(route);

   
  const addCart= async()=>{

    AsyncStorage.getItem('toekn', (err, result) => {
      if(result!=null)
      {
        console.log(result);
        var ref = db.ref('server/profile')
    var usersRef = ref.child("customer");
    var usertoken=usersRef.child(result+"/cart");
    usertoken.child(items.name).set({
      image:items.image,
      name:items.name,
      price:items.price,
      fixedprice:items.price,
      quantiry:1,
      cookId:items.token
   });
      }
    });
    
    await Vibration.vibrate(10);

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28}  />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={{uri:items.image}} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {items.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="star-outlines" color={'orange'} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            {items.description}
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
          <TouchableOpacity style={style.buttonHover} onPress={addCart}>
     
     <Text style={{textAlign:'center'}}>Add To Cart</Text>
     </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'orange',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color:'white'
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
    backgroundColor: 'white',
    color: '#FFFFFF',
    justifyContent:'center',
    alignSelf:'center'
  },
});

export default DetailsScreen;