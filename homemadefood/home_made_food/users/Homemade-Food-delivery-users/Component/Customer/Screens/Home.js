import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useEffect
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import food from '../Const/Foods';
import categories from '../Const/categories'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import Cart from './Cart';
import {db} from '../../server/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'










const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="Cart" component={Cart} />
 </Stack.Navigator>
  );
}



const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation,route}) => {

  var tokenkey=""
  AsyncStorage.getItem('toekn', (err, result) => {
     tokenkey=result;
  });




//  React.useEffect(() => {
 //  setToken(sessionStorage.getItem('token'));
//   if(token!=null){
//     console.log(token);
//     db.ref('server/profile/customer/dgrejV5mV1WwMoFSGqmoZtXoA593/').on('value', (snapshot) => {
//           setName(snapshot.val().name);
//     });
//   }
//   });

  





  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
 // const [token,setToken]=React.useState(sessionStorage.getItem('token'));
  const [name,setName]=React.useState("");
  const [foods,setFood]=React.useState(food);
  const [searchData,setSearchData]=React.useState("");




  ///search food 
    const handler=()=>{
      //console.log(searchData);
      let f=foods.filter(res=>{
        return res.name.toLocaleLowerCase().trim().match(searchData.toLocaleLowerCase())
      })
      setFood(f);
    }
    const cancle=()=>{
      setFood(food)
    }

    



  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? 'orange'
                    : 'pink',
                    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
                
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? 'white'
                      : 'orange',
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={'white'}
        activeOpacity={0.9}
        onPress={() =>navigation.navigate('DetailsScreen',{foods:food,tk:tokenkey})}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={{uri:food.image}} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: 'grey', marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={'white'} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              {name}
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color:'grey'}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../../../img/logo.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search Your Taste"
            onChangeText={(text)=>setSearchData(text)}
          />
          <TouchableOpacity onPress={cancle}>
          <Icon name="close-outline" size={28} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={handler}
        >
        <View style={style.sortBtn}>
          <Icon name="search" size={28} color={'white'} />
        </View>
        </TouchableOpacity>
      </View>
      <View>
        {/* <ListCategories /> */}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};



const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor:"#dff5d5",
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  return (
    
      <MyStack />
  
  );
}