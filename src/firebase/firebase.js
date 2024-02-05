// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"; // Make sure to include the storage module

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDVJOn9T2E8IPbBqJ2IV7QtFjqepZHvc7I",
  authDomain: "strava-e514c.firebaseapp.com",
  projectId: "strava-e514c",
  storageBucket: "strava-e514c.appspot.com",
  messagingSenderId: "540253162139",
  appId: "1:540253162139:web:a872759908e3a8b0e6943e",
  measurementId: "G-SEN4Q3RCYD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize the storage module

export { app, db, storage }; // Export storage for use in other components