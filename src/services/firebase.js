// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAncSIGuAWqE6kFEVYSL6P8HO760pMmTlg",
  authDomain: "strava-web-app-55457.firebaseapp.com",
  projectId: "strava-web-app-55457",
  storageBucket: "strava-web-app-55457.appspot.com",
  messagingSenderId: "558794162279",
  appId: "1:558794162279:web:07c241fdb142d58ccf54c2",
  measurementId: "G-DY625KB39X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);