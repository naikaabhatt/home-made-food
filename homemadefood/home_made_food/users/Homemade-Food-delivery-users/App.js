import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackActions, NavigationActions } from '@react-navigation/stack';
import RazorpayCheckout from 'react-native-razorpay';
import FrontScreen from './Component/FrontScreen';
import Profile from  './Component/Customer/Screens/Home'



//stack screen forDriver
import Login from './Component/Driver/Login'
import Register from "./Component/Driver/Register";
import Drawer from './Component/Driver/Navigation/Drawer'
import PhoneVerify from "./Component/Driver/PhoneVerify";
import OtpDriver from "./Component/Driver/OtpDriver";
import Logo from './Component/Driver/Logo'


//Stack For customer
import LoginCst from './Component/Customer/Login'
import RegisterCst from "./Component/Customer/Register";
import DrawerCst from './Component/Customer/Navigation/Drawer'
import PhoneVerifyCst from "./Component/Customer/PhoneVerify";
import OtpDriverCst from "./Component/Customer/OtpCustomer";
import LogoCst from './Component/Customer/Logo'


//Stack For Cook
import LoginCook from './Component/Cook/Login'
import RegisterCook from "./Component/Cook/Register";
import DrawerCook from './Component/Cook/Navigation/Drawer'
import PhoneVerifyCook from "./Component/Cook/PhoneVerify";
import OtpDriverCook from "./Component/Cook/OtpCook";
import LogoCook from './Component/Cook/Logo'
import FssiReg from './Component/Cook/FssiReg';







const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      headerTitle: null,
      headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Register" component={Register} />
       <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
       <Stack.Screen name="OtpDriver" component={OtpDriver} />
    </Stack.Navigator>
  );
}



const CStack = createStackNavigator();
function CustomerStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      headerTitle: null,
      headerShown:false}}>
      <CStack.Screen name="Login" component={LoginCst} />
      <CStack.Screen name="Drawer" component={DrawerCst} />
      <CStack.Screen name="Register" component={RegisterCst} />
       <CStack.Screen name="PhoneVerify" component={PhoneVerifyCst} />
       <CStack.Screen name="OtpDriver" component={OtpDriverCst} />
    </Stack.Navigator>
  );
}
const CKStack = createStackNavigator();
function CookStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      headerTitle: null,
      headerShown:false}}>
      <CKStack.Screen name="Login" component={LoginCook} />
      <CKStack.Screen name="Drawer" component={DrawerCook} />
      <CKStack.Screen name="Register" component={RegisterCook} />
       <CKStack.Screen name="PhoneVerify" component={PhoneVerifyCook} />
       <CKStack.Screen name="FssiReg" component={FssiReg} />
       <CKStack.Screen name="OtpDriver" component={OtpDriverCook} />
    </Stack.Navigator>
  );
}

const AStack=createStackNavigator();
function AppStack(){
  return(
  <Stack.Navigator screenOptions={{
    headerTransparent: true,
    headerTitle: null,
    headerShown:false}}> 
      <AStack.Screen name="FrontSceen" component={FrontScreen} />
      <AStack.Screen name="Customer" component={CustomerStack} />
      <AStack.Screen name="Cook" component={CookStack} />
      <AStack.Screen name="Driver" component={MyStack} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
  <AppStack/>
      
    </NavigationContainer>
  );
}
   // <AppStack/>