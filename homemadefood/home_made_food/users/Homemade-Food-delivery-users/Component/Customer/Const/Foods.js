import {db} from '../../server/firebaseConfig';
let foods = [];
//   {
//     id: '1',
//     name: 'Meat Pizza',
//     ingredients: 'Mixed Pizza',
//     price: '8.30',
//     image: require('../../../assets/meatPizza.png'),
//   },
//   {
//     id: '2',
//     name: 'Cheese Pizza',
//     ingredients: 'Cheese Pizza',
//     price: '7.10',
//     image: require('../../../assets/cheesePizza.png'),
//   },
//   {
//     id: '3',
//     name: 'Chicken Burger',
//     ingredients: 'Fried Chicken',
//     price: '5.10',
//     image: require('../../../assets/chickenBurger.png'),
//   },
//   {
//     id: '4',
//     name: 'Sushi Makizushi',
//     ingredients: 'Salmon Meat',
//     price: '9.55',
//     image: require('../../../assets/sushiMakizushi.png'),
//   },
// ];

// db.ref('id/').on('value', (snapshot) => {
  
//   // var i=snapshot.count();
//   // console.log(i);
//   console.log(snapshot.val());
//    snapshot.val().forEach(element => {
//      foods.push(element);
//    });
//  });

let data=[];
 db.ref('server/profile/cook').on('value',(snapshot)=>{
 // snapshot.val().forEach(element=>{
 //   console.log(element);
 // })
 for(var i in snapshot.val()){
 // data.push(snapshot.val()[i].foodItem);
 for(var j in snapshot.val()[i].foodItem)
 {
   foods.push(snapshot.val()[i].foodItem[j]);
 }
 }

 });




export default foods;