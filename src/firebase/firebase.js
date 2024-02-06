import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBPE227oKfZ4bhLbDwLboMnn7gsY0m1jcQ",
  authDomain: "first-strava.firebaseapp.com",
  projectId: "first-strava",
  storageBucket: "first-strava.appspot.com",
  messagingSenderId: "891434421249",
  appId: "1:891434421249:web:5befbe8a338b6d88a48400",
  measurementId: "G-RNBEENHS02"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize the storage module

export { app, db, storage }; // Export storage for use in other components