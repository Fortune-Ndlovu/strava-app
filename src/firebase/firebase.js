// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjcrf8uT-Rdl5jN_wppSbBYfERrlILWU",
  authDomain: "strava-web-app-96d86.firebaseapp.com",
  projectId: "strava-web-app-96d86",
  storageBucket: "strava-web-app-96d86.appspot.com",
  messagingSenderId: "247933251077",
  appId: "1:247933251077:web:0d32a83806e389dd3c766c",
  measurementId: "G-K76LVQFS4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);