// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7r_sScf4ZWiM0rB1JhvMaMwXUk8DEIms",
    authDomain: "rgitcollegeforum.firebaseapp.com",
    databaseURL: "https://rgitcollegeforum-default-rtdb.firebaseio.com",
    projectId: "rgitcollegeforum",
    storageBucket: "rgitcollegeforum.appspot.com",
    messagingSenderId: "375704606121",
    appId: "1:375704606121:web:fe2473820d174800b8a0b8",
    measurementId: "G-TMC2W0DJG1"
  };

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const urbranch = "CS";

const db = app.firestore();



export default db;
