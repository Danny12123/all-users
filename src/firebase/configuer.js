
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCIAP2XPxGveKlF543aBi562cksKs6sgDg",
  authDomain: "all-users-9289c.firebaseapp.com",
  databaseURL: "https://all-users-9289c-default-rtdb.firebaseio.com",
  projectId: "all-users-9289c",
  storageBucket: "all-users-9289c.appspot.com",
  messagingSenderId: "1028983880273",
  appId: "1:1028983880273:web:0c3b60937297fb41f19670"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
export const auth = getAuth(app);