import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDfS40WkUsjm0668UdWKeB53OdVLCGk9VQ",
    authDomain: "tareaseries.firebaseapp.com",
    databaseURL: "https://tareaseries.firebaseio.com",
    projectId: "tareaseries",
    storageBucket: "tareaseries.appspot.com",
    messagingSenderId: "174614742750",
    appId: "1:174614742750:web:a394d3af5681953cd7644f"  
};    
const firebaseApp = firebase.initializeApp(firebaseConfig); 
export const db = firebaseApp.firestore();