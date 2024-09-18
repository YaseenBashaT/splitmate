// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyAB3yJez0dFLmWkhA8xl3OTnQrmFxf86GA",
  authDomain: "the-expense-splitter.firebaseapp.com",
  projectId: "the-expense-splitter",
  storageBucket: "the-expense-splitter.appspot.com",
  messagingSenderId: "32028685360",
  appId: "1:32028685360:web:7416f78429a86a28c269f5",
  measurementId: "G-XK97P073KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

