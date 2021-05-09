
import {db} from '../../server/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'
let foodList = [];




AsyncStorage.getItem('toekn', (err, result) => {
  if(result!=null)
  {
      db.ref('server/profile/cook/'+result+'/foodItem').on('value', (snapshot) => {
          // console.log(snapshot.val());
      //     if(snapshot.val()!=null){
      //      snapshot.val().forEach(element => {
      //        cart.push(element)
      //      });
      //  }
                for(var i in snapshot.val())
                foodList.push(snapshot.val()[i]);

         });
         console.log(foodList);
  }
});



 
 
 
 export default foodList;