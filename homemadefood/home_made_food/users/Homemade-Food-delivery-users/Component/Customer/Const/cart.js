
import {db} from '../../server/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'
let cart = [];




AsyncStorage.getItem('toekn', (err, result) => {
  if(result!=null)
  {
      db.ref('server/profile/customer/'+result+'/cart').on('value', (snapshot) => {
          // console.log(snapshot.val());
      //     if(snapshot.val()!=null){
      //      snapshot.val().forEach(element => {
      //        cart.push(element)
      //      });
      //  }
                for(var i in snapshot.val())
                cart.push(snapshot.val()[i]);

         });
  }
});



 
 
 
 export default cart;