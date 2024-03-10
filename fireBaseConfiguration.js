// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk_SXLmkDrRijq96wIv_wZufThbi6H3PU",
  authDomain: "muviapp-2803c.firebaseapp.com",
  projectId: "muviapp-2803c",
  storageBucket: "muviapp-2803c.appspot.com",
  messagingSenderId: "359187858839",
  appId: "1:359187858839:web:3e41a85c1948e75af2b0d2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_APP_AUTH = getAuth(FIREBASE_APP);