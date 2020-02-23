// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUz3QOf7zB7Z-mccF4AuvduME2yX4ud_o",
  authDomain: "fe19tp2-lemon.firebaseapp.com",
  databaseURL: "https://fe19tp2-lemon.firebaseio.com",
  projectId: "fe19tp2-lemon",
  storageBucket: "fe19tp2-lemon.appspot.com",
  messagingSenderId: "275910465912",
  appId: "1:275910465912:web:929bcf50e38c6e7919d08d",
  measurementId: "G-9JKPQ6C9XY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
