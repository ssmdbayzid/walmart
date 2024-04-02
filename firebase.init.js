// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARttEKrue1h_oePxRz-j_f-jki-mF9l5c",
  authDomain: "photo-hub-a685d.firebaseapp.com",
  projectId: "photo-hub-a685d",
  storageBucket: "photo-hub-a685d.appspot.com",
  messagingSenderId: "882839476945",
  appId: "1:882839476945:web:03718aba0a4f1942fe43f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)