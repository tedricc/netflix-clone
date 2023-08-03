// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_DO3NN96_vAVPUe4LVHPldPsmLNMV0dE",
  authDomain: "netflix-clone-2a867.firebaseapp.com",
  projectId: "netflix-clone-2a867",
  storageBucket: "netflix-clone-2a867.appspot.com",
  messagingSenderId: "250823342788",
  appId: "1:250823342788:web:9deff7c9f581588e8a2791",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
