import * as React from 'react';
import { Button, View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Logo from "../img/Customer/logo.png";
import Chef from "../img/chef.png";
import Foodie from "../img/Foddie.png";
import Db from '../img/Dboy.png';
import Icons from 'react-native-vector-icons/Ionicons'

class FrontScreen extends React.Component{
    render(){
         return(
        <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={Logo}  style={{height:100,width:100}} />
        </View>
        <View>
            <Text style={{ fontSize:40,
                          fontFamily: 'sans-serif-light',
                          color:'#828079',textAlign:'center'
                        }}>Homemade <Text style={{color:'orange'}}>Food</Text>
            </Text>
        </View>
        <View style={styles.cont}>
        <View style={styles.User}>
          <Image source={Foodie} style={styles.img}/>
        </View>
          <View style={{justifyContent:"center",marginTop:-60}}>
           <Text style={{textAlign:'center',marginTop:15,fontSize:17,marginLeft:15}}> You Are a <Text style={{color:'orange'}}>Customer</Text></Text>
        <TouchableOpacity  onPress={() =>{this.props.navigation.navigate('Customer')}}>
         <View style={styles.go}>
         <Icons name={'ios-play-forward-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white',alignSelf:'center'}}/>
              
         </View>
         </TouchableOpacity>
        </View>
       
        </View>
        <View style={styles.cont}>
        
           <View style={styles.User}>
             <Image source={Chef} style={styles.img}/>
           </View>
           <View style={{justifyContent:"center",marginTop:-60}}>
        <Text style={{textAlign:'center',marginTop:15,fontSize:17}}> You Are a <Text style={{color:'orange'}}>Cook</Text></Text>
       <TouchableOpacity  onPress={() =>{this.props.navigation.navigate('Cook')}}>
        <View style={styles.go}>
        <Icons name={'ios-play-forward-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white',alignSelf:'center'}}/>
        </View>
        </TouchableOpacity>
        </View>
       
        </View>
        <View style={styles.cont}>
        
           <View style={styles.User}>
           <Image source={Db} style={styles.img}/>
           </View>
           <View style={{justifyContent:"center",marginTop:-60}}>
        <Text style={{textAlign:'center',marginTop:15,fontSize:17}}> You Are a <Text style={{color:'orange'}}>Driver</Text></Text>
        <TouchableOpacity  onPress={() =>{this.props.navigation.navigate('Driver')}}>
        <View style={styles.go}>
        <Icons name={'ios-play-forward-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white',alignSelf:'center'}}/>
        </View>
        </TouchableOpacity>
        </View>
       
        </View>
       </View>  
      );  
    }
}


 

const styles = StyleSheet.create({
    container: {
       flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
     
    },
    cont:{
        width:250,
        height:55,
        backgroundColor:'white',
        marginTop:30,
       borderBottomLeftRadius:55,
        borderTopEndRadius:55,
        borderBottomEndRadius:55,
        borderStyle:'dashed',
        borderColor:'black',
        borderWidth:1,
        borderTopStartRadius:55,
    },
    User:{
      width:55,
      height:55,
      backgroundColor:'white' , 
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      borderTopEndRadius:50,
      borderTopStartRadius:50,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    },
    img:{
        height:85,
        width:70,
        borderBottomLeftRadius:27,
        borderTopEndRadius:25,
       marginEnd:5,
        top:-5,
        marginLeft:-10
    },
   go:{
     height:55,
     width:55,
     left:210,
     backgroundColor:'orange',
     top:-33,
   borderRadius:50,
   justifyContent:'center',shadowColor: 'rgba(46, 229, 157, 0.4)',
   shadowOpacity: 1.5,
   elevation: 8,
   shadowRadius: 20 ,
   shadowOffset : { width: 1, height: 13},
   }
    
   
});
export default FrontScreen;