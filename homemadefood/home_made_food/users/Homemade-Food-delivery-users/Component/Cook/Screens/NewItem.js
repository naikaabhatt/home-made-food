import React, { useState, useEffect } from 'react';
import {ScrollView,Picker, Button,TextInput, Image, View, Platform,TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icons from 'react-native-vector-icons/Ionicons'
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Vegeterian");
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity style={{backgroundColor:'#e695a2',marginTop:100,marginLeft:-250,height:35,width:70,borderRadius:5,alignItems: 'center', justifyContent: 'center'}}><Text style={{color:'white',fontSize:20}}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'#9ecc60',marginTop:-35,marginLeft:200,height:35,width:70,borderRadius:5,alignItems: 'center', justifyContent: 'center'}}><Text style={{color:'white',fontSize:20}}>Submit</Text>
    </TouchableOpacity>
    <View>
    <Text style={{fontSize:20,marginTop:10}}>Title:</Text>
    <TextInput
          style={{borderWidth:2,width:300,height:30,borderColor:'orange'}}
          placeholder="    Name of Dish... "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View>
    <Text style={{fontSize:20,marginTop:10}}>Price:</Text>
    <TextInput
          style={{borderWidth:2,width:300,height:30,borderColor:'orange'}}
          placeholder=" Price in Rs "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'Numeric'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        
      <TouchableOpacity  style={{height:50,width:50,borderRadius:15,backgroundColor:"orange" ,alignItems: 'center', justifyContent: 'center',marginTop:20 }}onPress={pickImage} >
      <Icons name={'camera'} size={20} color={'rgba(91, 178, 76, 0.77)'} style={{color:'white'}}/>
      </TouchableOpacity>
     <View style={{width: 310, height: 210,alignItems: 'center', justifyContent: 'center',borderWidth:1}}>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 200 }} />}
</View>
      <View>
    <Text style={{fontSize:20,marginTop:10}}>Preparation Time:</Text>
    <TextInput
          style={{borderWidth:2,width:300,height:30,borderColor:'orange'}}
          placeholder="  Time in Minutes "
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'default'}
          underlineColorAndroid='transparent'
          onChangeText={(userName)=>this.setState({userName})}
        />
        </View>
        <View style={{height: 50, width: 150,borderWidth:2,marginTop:10,borderColor:"orange"}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,borderWidth:1 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      
        <Picker.Item label="Vegetarian" value="veg" />
        <Picker.Item label="Eggetarian" value="egg" />
        <Picker.Item label="Non-Vegetarian" value="non" />
      </Picker>
      </View>
 </View>
 </ScrollView>
  );
}