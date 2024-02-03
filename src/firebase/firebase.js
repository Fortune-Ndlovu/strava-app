// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdLoo7uF-2XaUMpvs1XpljnU_dJxmz0Ts",
  authDomain: "strava-85291.firebaseapp.com",
  projectId: "strava-85291",
  storageBucket: "strava-85291.appspot.com",
  messagingSenderId: "736072571964",
  appId: "1:736072571964:web:56074381eb815d9be97739",
  measurementId: "G-V6NZFHB65X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);