import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR4-_UWkPKlyRiFaA7MfEMCrIjufe1gF0",
    authDomain: "chatapp-24a8c.firebaseapp.com",
    projectId: "chatapp-24a8c",
    storageBucket: "chatapp-24a8c.appspot.com",
    messagingSenderId: "127791154895",
    appId: "1:127791154895:web:96eb7075e4b73ccd45d9ba",
    measurementId: "G-39JLZCQDRD" 
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }