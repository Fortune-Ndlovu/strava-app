import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const authSignInWithEmailAndPassword = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    return { user, uid: user.uid, userData };
  } catch (error) {
    return { error: error.message };
  }
};

export default authSignInWithEmailAndPassword;
