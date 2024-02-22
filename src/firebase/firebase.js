import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNLYNKmen_AwhBpo-m5YQ890fKc1oOrwY",
  authDomain: "strava-a1068.firebaseapp.com",
  projectId: "strava-a1068",
  storageBucket: "strava-a1068.appspot.com",
  messagingSenderId: "343617126656",
  appId: "1:343617126656:web:f77c998c3208954cd033e5",
  measurementId: "G-4G4N9F1T8R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize the storage module

export { app, db, storage }; // Export storage for use in other components