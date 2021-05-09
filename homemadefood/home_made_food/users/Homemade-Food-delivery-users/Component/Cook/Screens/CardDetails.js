

import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,TextInput,Dimensions, Button} from 'react-native';



class Home extends React.Component{
    render(){
        return(
            <View  style={styles.container}>
                 <Text style={{textAlign:'center',fontSize:30,borderBottomWidth:1,width:300,color:'orange'}}>Credit Card Details</Text>
                 <View style={{flexDirection:'row',marginTop:20}}>
    <Text style={{fontSize:15,marginTop:10}}>Name On Card*  </Text>
    <TextInput
          style={{borderWidth:2,width:200,height:30,borderColor:'orange',marginTop:5}}
          placeholder="    Name... "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
    <Text style={{fontSize:15,marginTop:10}}>Card Number*  </Text>
    <TextInput
          style={{borderWidth:2,width:200,height:30,borderColor:'orange',marginTop:5}}
          placeholder="    123456789 "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
    <Text style={{fontSize:15,marginTop:10}}>Expiry Date*  </Text>
    <TextInput
          style={{borderWidth:2,width:100,height:30,borderColor:'orange',marginTop:5}}
          placeholder="    Month.. "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        <TextInput
          style={{borderWidth:2,width:100,height:30,borderColor:'orange',marginTop:5,marginLeft:10}}
          placeholder="    Year.. "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
    <Text style={{fontSize:15,marginTop:10}}>Security Code*  </Text>
    <TextInput
          style={{borderWidth:2,width:200,height:30,borderColor:'orange',marginTop:5}}
          placeholder="    123456789 "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View style={{marginTop:20}}>
            <Button title="Confirm"/>
        </View>
            </View>
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
  
export default Home;