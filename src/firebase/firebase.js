import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAg4b3DhzR4NoKC_JWE3T2uVQAlEkkY2pA",
  authDomain: "strava-one.firebaseapp.com",
  projectId: "strava-one",
  storageBucket: "strava-one.appspot.com",
  messagingSenderId: "890413440195",
  appId: "1:890413440195:web:552833cec5cc24f433d676",
  measurementId: "G-PXHFGNW75H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Get the current user ID after authentication
const getCurrentUserId = () => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};

export { app, db, storage, auth, getCurrentUserId }