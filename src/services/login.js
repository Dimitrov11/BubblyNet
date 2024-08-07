import { signInWithEmailAndPassword, getAuth } from "firebase/auth/cordova";


export async function loginUser(email, password) {
    if (email === '' || password === '') {
        return 'All fields must be filled!'
    }

    try {
        const auth = getAuth();
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user;
    } catch (error) {
        alert(error);
    }
}