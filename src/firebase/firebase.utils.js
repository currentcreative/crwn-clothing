import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDeLcJvxZmAyI6Qq0dYx4x-xhREu0b-3ZI",
  authDomain: "crwn-clothing-db-1bd7b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-1bd7b.firebaseio.com",
  projectId: "crwn-clothing-db-1bd7b",
  storageBucket: "",
  messagingSenderId: "118095805257",
  appId: "1:118095805257:web:ba2e239b660b12b0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;