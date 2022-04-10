// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNLeDjr2zUHRKZInc4cRNnAuHblkjlK4",
  authDomain: "ema-jhon-simple-a6d9f.firebaseapp.com",
  projectId: "ema-jhon-simple-a6d9f",
  storageBucket: "ema-jhon-simple-a6d9f.appspot.com",
  messagingSenderId: "475243172274",
  appId: "1:475243172274:web:305986872f3423a85014ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;