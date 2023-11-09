// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJkEB4Lm_8fcOje0zdz3ZHB3I1tpK-dw",
  authDomain: "netflix-clone-105df.firebaseapp.com",
  projectId: "netflix-clone-105df",
  storageBucket: "netflix-clone-105df.appspot.com",
  messagingSenderId: "219879043745",
  appId: "1:219879043745:web:391d0d99eb17fbf934f6e0",
  measurementId: "G-5WGZGEW931",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
