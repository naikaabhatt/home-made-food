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
import FoodList from '../Screens/FoodList';
import Profile from '../Screens/Profile';
import Login from "../Login";
import Faqs from '../Screens/Faqs';
import OrderDetail from "../Screens/OrderDetail";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
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
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="FoodList" component={FoodList}></Stack.Screen>
        <Stack.Screen name="Order" component={OrderDetail}></Stack.Screen>
        <Stack.Screen name="Faqs" component={Faqs}></Stack.Screen>
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
           <Text style={{color:'white',fontSize:30,fontFamily:'sans-serif-light',fontStyle:'italic',left:5}}>Krishty Joy</Text>
           <Text style={{color:'white',fontSize:10,fontFamily:'sans-serif-light',left:5}}>Krishty1Joy@example.com</Text>
        </View>
        <View>
          <DrawerItem
            label="Home"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Home')}
            icon={()=><Icons name={'ios-home-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
          <DrawerItem
            label="Profile"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Profile')}
            icon={()=><Icons name={'happy'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
          <DrawerItem
            label="FoodList"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('FoodList')}
            icon={()=><Icons name={'newspaper-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
          <DrawerItem
            label="Order"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Order')}
            icon={()=><Icons name={'fast-food'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
          />
           <DrawerItem
            label="Faqs"
            labelStyle={{color: 'white',marginLeft:-15}}
            onPress={() => props.navigation.navigate('Faqs')}
            icon={()=><Icons name={'ios-chatbox-ellipses-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}} size={16}/>}
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

export default () => {
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
          {props => <Screens {...props} style={{ borderRadius, transform: [{ scale }] }} />}
        </Drawer.Screen>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}