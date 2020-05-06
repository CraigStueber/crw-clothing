import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCTxh55e-fVGMSsuiTFhgJks4EFzXO7QqY",
    authDomain: "crwn-db-25e9b.firebaseapp.com",
    databaseURL: "https://crwn-db-25e9b.firebaseio.com",
    projectId: "crwn-db-25e9b",
    storageBucket: "crwn-db-25e9b.appspot.com",
    messagingSenderId: "435520194183",
    appId: "1:435520194183:web:a8bee1125889c2dd605a22",
    measurementId: "G-EY4P6JTD92"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;