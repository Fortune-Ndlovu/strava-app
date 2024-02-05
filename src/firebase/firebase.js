// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"; // Make sure to include the storage module

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize the storage module

export { app, db, storage }; // Export storage for use in other components