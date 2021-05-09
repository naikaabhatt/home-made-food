import React from 'react';
import { Image, StyleSheet,View,Button, Text,TouchableOpacity,StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import ava from "../../../img/logo.png";
import { LinearGradient } from 'expo-linear-gradient';

// screens
import Home from './Tab';
import Notification from '../Screens/Notification';
import Login from "../Login";
import Profile from '../Screens/Profile'
import Faqs from '../Screens/faqs';
import {db} from "../../server/firebaseConfig";
import PersoneInfo from "../../Customer/Screens/Personelnfo";
import AddressInfo from "../Screens/AddAddress";
import RaiseQuestion from "../Screens/RaisedQuestion";
import payment from "../Screens/Payment";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
let token="";
let name="";
let email="";
async function  getData(){
  if(token.token!=null){
    //console.log(token);
   await  db.ref('server/profile/customer/'+token.token+"/").on('value', (snapshot) => {
          name=snapshot.val().name;
          email=snapshot.val().EMAIL;
    });
  }
  // console.log(token.token);
}

const Screens = ({ navigation, style ,attribute}) => {

  return (
    <Animated.View style={[{flex:1,overflow:'hidden'},style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icons name={'menu'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'black',left:10}} size={30}/>
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} ></Stack.Screen>
        <Stack.Screen name="My Account" component={Profile}></Stack.Screen>
        <Stack.Screen name="Payment" component={payment}></Stack.Screen>
        <Stack.Screen name="Notification" component={Notification}></Stack.Screen>
        <Stack.Screen name="Raise Questions" component={RaiseQuestion}></Stack.Screen>
        <Stack.Screen name="FAQs" component={Faqs}></Stack.Screen>
        <Stack.Screen name="PersoneInfo" component={PersoneInfo}></Stack.Screen>
        <Stack.Screen name="AddressInfo" component={AddressInfo}></Stack.Screen>
        <Stack.Screen options ={{headerShown:false}}name="Login" component={Login}></Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={{padding:2}}>
          <Image
            source={ava}
              
              style={{ height: 60,
              width: 60,
             borderRadius:150, 
             top:10,
             left:10,
             resizeMode:"center"}}
           // style={styles.avatar}
          
          />
          
           <Text style={{color:'white',fontSize:20,fontFamily:'sans-serif-light',top:5,left:5}}>Welcome</Text>
           <Text style={{color:'white',fontSize:30,fontFamily:'sans-serif-light',fontStyle:'italic',left:5}}>{name}</Text>
           <Text style={{color:'white',fontSize:10,fontFamily:'sans-serif-light',left:5}}>{email}</Text>
        </View>
        <View>
          <DrawerItem
            label="Home"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Home',{tk:token})}
            icon={()=><Icons name={'ios-home-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
          
          <DrawerItem
            label="My Account"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('My Account',{tk:token})}
            icon={()=><Icons name={'ios-notifications-circle-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
           <DrawerItem
            label="Payments"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Notification')}
            icon={()=><Icons name={'ios-notifications-circle-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
           <DrawerItem
            label="Raise Questions"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Raise Questions')}
            icon={()=><Icons name={'ios-notifications-circle-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
           <DrawerItem
            label="FAQs"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('FAQs')}
            icon={()=><Icons name={'ios-notifications-circle-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
           <DrawerItem
            label="Notification"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Notification')}
            icon={()=><Icons name={'ios-notifications-circle-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
         
        </View>
      </View>

      <View >
        <DrawerItem
         label="Logout"
          labelStyle={{ color: 'white',fontSize:20,left:-20}}
          icon={() => <Icons name={'enter-outline'}  color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={30}/>}
          onPress={() =>{props.navigation.navigate('Login')}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default ({route}) => {

  {getData()}
  token=route.params;
  console.log("drawer")
  console.log(token)
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  

  return (
   
    <NavigationContainer independent={true} style={{backgroundColor:'orange'}}>
     <StatusBar
             backgroundColor='black'
             barStyle='light-content'
         />
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Home"
        drawerStyle={{ flex: 1, width: '55%',backgroundColor:"orange"}}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        sceneContainerStyle={{ backgroundColor: 'orange' }}
       
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
          {/* <Drawer.Screen name="Screens" component={Screens}></Drawer.Screen> */}
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={{ borderRadius, transform: [{ scale }] }} attribute={route.params}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}