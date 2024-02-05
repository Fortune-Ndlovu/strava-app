// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg2YRjgCqm_iNiUnqkCVYZdFCmj0UkJdA",
  authDomain: "strava-project-4135f.firebaseapp.com",
  projectId: "strava-project-4135f",
  storageBucket: "strava-project-4135f.appspot.com",
  messagingSenderId: "994871953859",
  appId: "1:994871953859:web:73143dcf8e8afad90c5576",
  measurementId: "G-ZS72LHRK0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);