import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGyUNDn6Zwe0rz0Z87D4kKPf0G9zX7Smk",
  authDomain: "screens-8a7dc.firebaseapp.com",
  projectId: "screens-8a7dc",
  storageBucket: "screens-8a7dc.appspot.com",
  messagingSenderId: "1028107657027",
  appId: "1:1028107657027:web:97cd0cbcf08f40d0a299f6",
  measurementId: "G-BN75ZTG2WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, collection, addDoc, getDocs, app };
