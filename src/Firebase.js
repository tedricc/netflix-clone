// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCib1jnMfcVPZaKaVCoEefzk5kHzUlTM70",
  authDomain: "netflix-clone-8f4ac.firebaseapp.com",
  projectId: "netflix-clone-8f4ac",
  storageBucket: "netflix-clone-8f4ac.appspot.com",
  messagingSenderId: "938768752060",
  appId: "1:938768752060:web:bc12c39b3c65443f40dfb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
