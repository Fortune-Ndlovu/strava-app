import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const authSigninPassword = async (email, password) => { 
    const auth = getAuth();
    try { 
        const userCredential = signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch(error) {
        return {error: error.message}    
    };
}

export default authSigninPassword;