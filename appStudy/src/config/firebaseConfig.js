import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALZTTviu-EH3seHJW4B99XNKnViqI6Lp8",
  authDomain: "study-app-7fda9.firebaseapp.com",
  projectId: "study-app-7fda9",
  storageBucket: "study-app-7fda9.firebasestorage.app",
  messagingSenderId: "282934230711",
  appId: "1:282934230711:web:5485f162015369260fd732"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);