// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";

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
  databaseURL: "https://netflix-clone-105df-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export function writeUserData(userId, name, email, phoneNumber) {
  const db = getDatabase();
  set(ref(db, "user/" + userId), {
    id: userId,
    username: name,
    email: email,
    phoneNumber: phoneNumber,
  })
    .then(() => {
      console.log("sc");
    })
    .catch((error) => {
      console.log(error);
    });
}

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
export const getFireBaseData = async (data) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `user/${data}`));
  if (snapshot.exists()) {
    const data = await snapshot.val();
    return data;
  } else {
    console.log("No data");
  }
};
export const auth = getAuth();
export default database;
