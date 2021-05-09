import React from 'react';
import { Image, StyleSheet,View,Button, Text,TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
//screens

import Home from '../Screens/Home';
import Notification from '../Screens/Notification';
import cart from '../Screens/Cart'

const screenProps = {
    someFlag: true,
    data: "SET"
}
const Tab = createMaterialBottomTabNavigator();
class Tabnavigation extends React.Component{

    render(){
        return(
            
            <Tab.Navigator activeColor="#f5da90" inactiveColor="#3e2465"shifting={true} >
            <Tab.Screen name="Home" component={Home} 
            options={{
            tabBarIcon:()=>(<Icons name={'ios-home'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#ceed91',
            }}
             />
             
            
            <Tab.Screen name="Cart" component={cart} 
            options={{
            tabBarIcon:()=>(<Icons name="cart-outline" style={{color:'orange'}} size={25}/>),
            tabBarColor:'#84f5d5',
            
            }}

            />
            {/* <Tab.Screen name="Earnings" component={Notification} 
            options={{
            tabBarIcon:()=>(<Icons name={'md-wallet'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#f5aed6',
            
            }}

            /> */}
           
          </Tab.Navigator>
        );
    }
}
export default Tabnavigation;