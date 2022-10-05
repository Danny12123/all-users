// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCIAP2XPxGveKlF543aBi562cksKs6sgDg",
  authDomain: "all-users-9289c.firebaseapp.com",
  projectId: "all-users-9289c",
  storageBucket: "all-users-9289c.appspot.com",
  messagingSenderId: "1028983880273",
  appId: "1:1028983880273:web:0c3b60937297fb41f19670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);