import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCi9ixVVAuHaam_9GTsNcszThgPZ2J0DGM",
    authDomain: "crwn-db-adfe6.firebaseapp.com",
    databaseURL: "https://crwn-db-adfe6.firebaseio.com",
    projectId: "crwn-db-adfe6",
    storageBucket: "crwn-db-adfe6.appspot.com",
    messagingSenderId: "263381065093",
    appId: "1:263381065093:web:2b4f3a4d5f204b890838ec",
    measurementId: "G-3DEPWV038Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

