import { boot } from 'quasar/wrappers';

//import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app'
//import { initializeApp, firebase } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7V2g0I4gReTEjJ5e9VAR_I4dCrUuqD0w",
  authDomain: "zodiaco-8ce72.firebaseapp.com",
  databaseURL: "https://zodiaco-8ce72-default-rtdb.firebaseio.com",
  projectId: "zodiaco-8ce72",
  storageBucket: "zodiaco-8ce72.appspot.com",
  messagingSenderId: "335234282418",
  appId: "1:335234282418:web:a1bd028da12019f4e0eaab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, marcaTiempo };



// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
