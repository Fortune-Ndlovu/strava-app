import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Completed: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACklxBeZiCfUoFcFOakUU3Mxg7kFOR_Jo",
  authDomain: "strava-web-application-replica.firebaseapp.com",
  projectId: "strava-web-application-replica",
  storageBucket: "strava-web-application-replica.appspot.com",
  messagingSenderId: "1061110930450",
  appId: "1:1061110930450:web:2b85608831d9e8a1734ccb",
  measurementId: "G-FBJTPMR2X9"
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