import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDTc_nevWkdvIa1xoVghbHQMKBOrsIjRjY",
  authDomain: "house-marketplace-app-52621.firebaseapp.com",
  projectId: "house-marketplace-app-52621",
  storageBucket: "house-marketplace-app-52621.appspot.com",
  messagingSenderId: "853976433790",
  appId: "1:853976433790:web:da29b0e7523b734e12c42f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()