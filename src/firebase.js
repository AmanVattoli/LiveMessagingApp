import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    //firebase config goes here
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }