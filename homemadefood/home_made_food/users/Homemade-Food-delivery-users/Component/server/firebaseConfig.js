import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDN0e4CYmWW-z4z3UobXHUHfvC2UMhVf_E",
    authDomain: "homemadefoodzoe.firebaseapp.com",
    databaseURL: "https://homemadefoodzoe-default-rtdb.firebaseio.com",
    projectId: "homemadefoodzoe",
    storageBucket: "homemadefoodzoe.appspot.com",
    messagingSenderId: "717491231256",
    appId: "1:717491231256:web:7582528c8f736f1f67816d",
    measurementId: "G-GWJ0X9S3YH",
    
};

firebase.initializeApp(firebaseConfig);



const db=firebase.database();
const auth=firebase.auth();
const fstorage=firebase.storage();
const fbase=firebase;
export  {db,auth,fbase,fstorage};
