import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authSignupPassword = async (email, password) => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        return { error: error.message };
    };
    
};

export default authSignupPassword;