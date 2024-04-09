// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp8hRjVp2QyQEZHZ3ogxVFze7-qDjhPvg",
  authDomain: "serviventa-cfe1f.firebaseapp.com",
  projectId: "serviventa-cfe1f",
  storageBucket: "serviventa-cfe1f.appspot.com",
  messagingSenderId: "35995901115",
  appId: "1:35995901115:web:23bf3c9c302b4cb8739d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
