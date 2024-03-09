import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authSignUpWithEmailAndPassword = async (email, password) => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        return { error: error.message };
    };
    
};

export default authSignUpWithEmailAndPassword;