import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const authSignUpWithEmailAndPassword = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create a user document in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });

    return { user, uid: user.uid };
  } catch (error) {
    return { error: error.message };
  }
};

export default authSignUpWithEmailAndPassword;
