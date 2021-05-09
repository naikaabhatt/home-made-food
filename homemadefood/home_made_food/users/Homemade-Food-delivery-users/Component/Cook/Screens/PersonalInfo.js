import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {db} from '../../server/firebaseConfig';

class PersoneInfo extends React.Component{
  static name1="";
  static email="";
  static phone=0;

  constructor(props)
  {
    super(props);
    this.state={
      token:this.props.route.params.token.token,
      name:"",
      phone:"",
      email:""
    }

    

    this.setState({token:this.props.route.params.token.token})
    if(this.props.route.params.token.token!=null){
      console.log(this.state.token);
      db.ref('server/profile/customer/'+this.props.route.params.token.token+"/").on('value', (snapshot) => {
            
          this.setState({name:snapshot.val().name});

           this.name1=snapshot.val().name;
          this.phone=snapshot.val().phone;
           this.email=snapshot.val().EMAIL;
          

      });
    }

    


  }

  handler(e)
      {
        console.log(this.state.name);
        console.log(this.state.phone);
        console.log(this.state.email);

        //       console.log(this.props.route.params.token.token)

              var ref = db.ref('server/profile')
              var usersRef = ref.child("customer");
              usersRef.child(this.props.route.params.token.token).set({
                name:this.state.name,
                 phone:this.state.phone,
                 EMAIL:this.state.email
                 
              });
            


            



      }

    render(){
      

        return(
      <View style={styles.container}>
      <View style={styles.cnt}>
        <View style={styles.photo}>

        </View>
        <TouchableOpacity style={{width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'white',
        top:10,alignItems:'center',justifyContent:'center',borderWidth:.5,borderStyle:'dashed'}}>
            <Icons name={'camera-sharp'} size={20} color={'rgba(91, 178, 76, 0.77)'}/> 
        </TouchableOpacity>
      </View>
      <View style={{top:25}}>
      <Text style={{color:'#404052',fontSize:25,textAlign:'center'}}>Name,Lastname</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>Enter Your Number,Email,Name and then click</Text>
                 <Text style={{color:'grey',fontSize:20,textAlign:'center'}}>On the "save" button below</Text>
        </View>
      <View style={styles.inputCont}>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="Name Lastname "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(name)=>this.setState({name})}
          
        />
        <Icons name={'person-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{position:'absolute',
    top:10,
    left:5
    }}/>
         </View>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="Email Id "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(email)=>this.setState({email})}
          
        />
        <Icons name={'mail-open-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{position:'absolute',
    top:10,
    left:5
    }}/>
         </View>
         <View style={styles.intxt}>
         
         <TextInput
          style={{marginLeft:30,marginTop:15}}
          placeholder="Phone Number "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'Numeric'}
          underlineColorAndroid='transparent'
          onChangeText={(phone)=>this.setState({phone})}
          
        />
        <Icons name={'ios-call-outline'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{position:'absolute',
    top:10,
    left:5
    }}/>
         </View>
      </View>
      <TouchableOpacity style={styles.buttonHover} onPress={this.handler.bind(this)}>
     
     <Text style={{textAlign:'center'}}>Save</Text>
     </TouchableOpacity>
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
    cnt:{
        width:120,
        height:120,
        backgroundColor:'white',
        borderRadius:60,
        borderWidth:1,
        borderStyle:'dashed',
        justifyContent: 'center',
      alignItems: 'center',
    },
    photo:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderRadius:50,
        top:15
        
    },
    inputCont:{
        height:200,
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        marginTop:25,
    },
    intxt:{
        height:45,
        width:270,
        backgroundColor:'#edf0ee',
        borderRadius:25,
        borderStyle:'dashed',
        borderWidth:1,
        marginTop:10
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
      justifyContent:'center'
    },
}
);
export default  PersoneInfo;