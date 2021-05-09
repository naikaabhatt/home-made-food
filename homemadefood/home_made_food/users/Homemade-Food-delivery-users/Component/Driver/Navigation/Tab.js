import React from 'react';
import { Image, StyleSheet,View,Button, Text,TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//screens

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Notification from '../Screens/Notification';
import Schedule from '../Screens/Schedule';
import Icons from 'react-native-vector-icons/Ionicons';
import Payment from '../Screens/Payment';
const Tab = createMaterialBottomTabNavigator();
class Tabnavigation extends React.Component{
    render(){
        return(
            <Tab.Navigator activeColor="#f5da90" inactiveColor="#3e2465"shifting={true} initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}
            options={{
            tabBarIcon:()=>(<Icons name={'ios-home'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#ceed91',
            }}
             />
              <Tab.Screen name="Schedule" component={Schedule} 
            options={{
            tabBarIcon:()=>(<Icons name={'ios-calendar'} style={{color:'orange'}} size={25}/>),
            tabBarColor:'#d49494',
            
            }}

            />
            
            <Tab.Screen name="Account" component={Profile} 
            options={{
            tabBarIcon:()=>(<Icons name={'ios-person-circle'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#d29bf2',
           
            }}
         />
            <Tab.Screen name="Notification" component={Notification} 
            options={{
            tabBarIcon:()=>(<Icons name={'ios-notifications-circle-outline'} style={{color:'orange'}} size={25}/>),
            tabBarColor:'#84f5d5',
            
            }}

            />
            <Tab.Screen name="Earnings" component={Notification} 
            options={{
            tabBarIcon:()=>(<Icons name={'md-wallet'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#f5aed6',
            
            }}

            />
           
          </Tab.Navigator>
        );
    }
}
export default Tabnavigation;