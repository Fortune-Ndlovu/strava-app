// authWithGoogle.js

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const authSignUpWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user already exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    let userData = userDoc.exists() ? userDoc.data() : null;

    if (!userData) {
      // Create user document in Firestore if it doesn't exist
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        // Add additional user data if needed
      });
      
      // Fetch updated user data
      userData = (await getDoc(doc(db, "users", user.uid))).data();
    }

    return { user, uid: user.uid, userData };
  } catch (error) {
    return { error: error.message };
  }
};

export default authSignUpWithGoogle;
