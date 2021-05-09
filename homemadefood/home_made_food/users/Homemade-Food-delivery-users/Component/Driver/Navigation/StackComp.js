

import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";



//Stack
import Login from '../Login';
import Register  from '../Register';
import PhoneVerify  from "../PhoneVerify";
import OtpDriver from "../OtpDriver";
import Drawer from "./Drawer";
import LoginComp from '../../LoginComp'



const Stack = createStackNavigator();
class StackComp extends React.Component{
    render(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginComp" component={LoginComp} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
            <Stack.Screen name="OtpDriver" component={OtpDriver} />
            <Stack.Screen name="Drawer" component={Drawer} />
          </Stack.Navigator>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default StackComp;