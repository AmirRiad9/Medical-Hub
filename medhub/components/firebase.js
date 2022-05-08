// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkhB7C73WeSdwEOadjNzH6kuWcB6HTXok",
  authDomain: "fir-auth-ae5eb.firebaseapp.com",
  projectId: "fir-auth-ae5eb",
  storageBucket: "fir-auth-ae5eb.appspot.com",
  messagingSenderId: "449663127133",
  appId: "1:449663127133:web:d607622d7a5ea9bef9c7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};