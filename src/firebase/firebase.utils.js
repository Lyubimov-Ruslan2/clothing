import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyA2dMNdf_6bBVPopKgwvCqSrEi-FXsdLj0",
  authDomain: "clothes-db-5fc2e.firebaseapp.com",
  projectId: "clothes-db-5fc2e",
  storageBucket: "clothes-db-5fc2e.appspot.com",
  messagingSenderId: "783402525688",
  appId: "1:783402525688:web:14ae6ef6208d9b68112c0d",
  measurementId: "G-ZZK14HTSSW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
