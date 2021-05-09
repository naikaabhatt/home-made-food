
import React from 'react';
import logo from './Img/a.png'
// import all the components we are going to use
import { Image,SafeAreaView,Dimensions, View, StyleSheet,TouchableOpacity, Text, Linking ,TextInput} from 'react-native';
const {height,width}=Dimensions.get('window');
const App = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Image source={logo} style={styles.lg}/>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
         To go further in the app you must enter your Fssai Registration Id
        </Text>
        <View style={{marginLeft:30}}>
    <Text style={{fontSize:20,marginTop:10}}>FSSAI Registration Id:</Text>
    <TextInput
          style={{borderWidth:2,width:300,height:30,borderColor:'orange'}}
          placeholder="    Reg id... "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <TouchableOpacity style={styles.buttonHover} onPress={() =>{navigation.navigate('PhoneVerify')}}>
         <Text style={{textAlign:'center'}}>Verify</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          If You haven't registered yet then you can click{' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.onlinelegalindia.com/services/fssai-registration/?gclid=EAIaIQobChMIwdnvltmv8AIVPDVyCh18kQjJEAAYASAAEgJXdPD_BwE');
            }}>
            Here
          </Text>
          .It will guide you that How can You register yourself.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
  lg:{
    height:height/4,
    width:width/2,
    marginTop:20,
    marginLeft:width/4-10
 
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
    justifyContent:'center',
    alignSelf:'center'
  },
  textStyle: {
    margin: 10,
    marginTop:20,
    fontSize:20,
    textAlign:'center'
  },
  hyperlinkStyle: {
    color: 'blue',
    fontSize:30
  },
  titleStyle: {
    fontSize: 30,
    margin: 10,
    textAlign:'center',
    color:'orange'
  },
});
