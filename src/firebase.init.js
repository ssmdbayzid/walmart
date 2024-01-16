// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8xVVH37gaSclMxOzgx39jBA72DrQ0j-I",
  authDomain: "walmart-272ed.firebaseapp.com",
  projectId: "walmart-272ed",
  storageBucket: "walmart-272ed.appspot.com",
  messagingSenderId: "1053511369246",
  appId: "1:1053511369246:web:a1a27f7db9349804aa640f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth



/*
apiKey: import.meta.env.VITE_API_KEY,
authDomain: import.meta.env.VITE_AUTH_DOMAIN,
projectId: import.meta.env.VITE_PROJECT_ID,
storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGEINGSENDER_ID,
appId: import.meta.env.VITE_APP_ID
*/