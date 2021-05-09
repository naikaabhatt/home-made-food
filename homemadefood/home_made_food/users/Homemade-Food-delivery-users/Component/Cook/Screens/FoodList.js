import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, ImageBackground ,Image,Dimensions,FlatList} from 'react-native';
const {height,width}=Dimensions.get('window');
import foodLists from "../const/FoodList";

export default function Foodlist(){


    const foodlist=()=>{
        return (
            <FlatList
              data={foodLists}
              showsVerticalScrollIndicator={false}
              renderItem={({ item,index }) => (

            <View style={{ shadowColor: 'rgba(46, 229, 157, 0.4)',
            shadowOpacity: 2,
            elevation: 8,
            shadowRadius: 50 ,
shadowOffset : { width: 1, height: 13},
borderColor:'#e1e3e2',

height:200,width:width-10,
marginTop:25,
alignSelf:'center',
borderWidth:1,justifyContent:'center',flexDirection:'row'}}>
<View style={{height:130,width:105,backgroundColor:"yellow",marginLeft:0,marginTop:35}}>
<Image source={{uri:item.image}} style={{height:130,width:105}}/>
</View>
<View style={{marginTop:30,height:150,width:200,backgroundColor:"white",left:10,flexDirection:"column"}}>
  <Text style={{fontSize:20}}>Name Of Dish:{item.name}</Text>
  <Text style={{fontSize:15}}>Price:{item.price}</Text>
  <Text style={{fontSize:15}}>Preparation Time:{item.preprationTime}</Text>
  <Text style={{fontSize:15}}>Food Charecterstick:veg/Non veg/egg:{item.type}</Text>   
  
</View>

</View>

              )}
              />        
)


        
    }
    
    
        return(
            
            <View  style={styles.container}>
                
                 <Text style={{fontSize:25,color:'orange',borderBottomWidth:1,width:width,marginTop:-10}}>Food List </Text>
                 {foodlist()}  
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });