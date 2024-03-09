import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const authSignInWithEmailAndPassword = async (email, password) => {
	const auth = getAuth();
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = userCredential.user;
		return { user };
	} catch (error) {
		return { error: error.message };
	}
};

export default authSignInWithEmailAndPassword;
