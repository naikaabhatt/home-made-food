import * as React from 'react';
import { Button, View, Text,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import lg from '../../../img/Customer/Profile.png'
import PersonelInfo from '../Screens/PersonalInfo'
import CardDetails from '../Screens/CardDetails'
class Profile extends React.Component{
    constructor(props)
    {
        super(props);
    }
    handler(e)
    {
            
            this.props.navigation.navigate('PersonelInfo',{token:this.props.route.params.tk});
    }
    addresshandler(e)
    {
        this.props.navigation.navigate('CardDetails',{token:this.props.route.params.tk});
    }

    render(){
        return(
            <View style={styles.container}>
             <StatusBar
                 backgroundColor='black'
                 barStyle='light-content'
                />
               <View style={styles.upper}>
                 <Image source={lg} style={styles.img}/>
                 <Text style={{color:'#404052',fontSize:25,textAlign:'center'}}>Profile Information</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>You should provide the </Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>Information below</Text>
               </View>
               <View style={styles.cont}>
               <Icons name={'home-outline'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
               <Text style={{color:'#404052',fontSize:15,textAlign:'center',marginTop:-25,marginLeft:-50}}>Add Card Details</Text>
               <TouchableOpacity onPress={this.addresshandler.bind(this)}>
                   <View style={styles.go}>
                   <Icons name={'add-circle'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={{alignSelf:'center',color:'white'}}/>
                   </View>
               </TouchableOpacity>
               </View>
               <View style={styles.cont}>
               <Icons name={'person-outline'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
               <Text style={{color:'#404052',fontSize:15,textAlign:'center',marginTop:-25,marginLeft:-50}}>Personal Information</Text>
               <TouchableOpacity onPress={this.handler.bind(this)}>
                   <View style={styles.go}>
                   <Icons name={'add-circle'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={{alignSelf:'center',color:'white'}}/>
                   </View>
               </TouchableOpacity>
               </View>
               <View style={styles.cont}>
               <Icons name={'ios-lock-open-outline'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={styles.icon}/>
               <Text style={{color:'#404052',fontSize:15,textAlign:'center',marginTop:-25,marginLeft:-50}}>Change Password</Text>
               <TouchableOpacity>
                   <View style={styles.go}>
                   <Icons name={'add-circle'} size={25} color={'rgba(91, 178, 76, 0.77)'} style={{alignSelf:'center',color:'white'}}/>
                   </View>
               </TouchableOpacity>
               <View style={{height:70,backgroundColor:'white'}}></View>
               </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      height:'100%',
      width:'100%',
      
    },
    upper:{
        backgroundColor:'white',
        height:'25%',
        width:'100%',
        alignSelf:'flex-start',
        justifyContent: 'center',
      alignItems: 'center',

    },
    img:{
        height:150,
        width:150,
    },
    cont:{
        width:260,
        height:55,
        borderWidth:.5,
        borderColor:'#bbbbbd',
        borderStyle:"dashed",
        top:60,
        borderRadius:10,
        marginTop:20,
        borderEndColor:'transparent'
    },
    icon:{
        marginTop:15,
        marginLeft:10,
        color:'black'
    },
    go:{
        height:55,
        width:55,
        backgroundColor:'orange',
        marginLeft:215,
        top:-38,
        borderRadius:50,
        shadowColor: 'rgba(46, 229, 157, 0.4)',
        shadowOpacity: 1.5,
        elevation: 8,
        shadowRadius: 20 ,
        shadowOffset : { width: 1, height: 13},
        justifyContent:'center',
        alignItems:'center'
    }
}
);
export default Profile;