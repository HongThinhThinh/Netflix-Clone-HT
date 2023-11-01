// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
console.log("vô tới config firebase r nhen");

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
