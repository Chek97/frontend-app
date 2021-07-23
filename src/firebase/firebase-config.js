import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeYn1bqhCjxcg1HLqZR_1WRf14dkr4GG8",
    authDomain: "react-login-app-89d67.firebaseapp.com",
    projectId: "react-login-app-89d67",
    storageBucket: "react-login-app-89d67.appspot.com",
    messagingSenderId: "939522323643",
    appId: "1:939522323643:web:24579f135d9af8a923259e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}