import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/cordova";

export async function registerUser(name, email, password, rePassword) {
    if (name === '' || email === '' || password === '' || rePassword === '') {
        return 'All fields must be filled!'
    }

    if (name.length <= 3) {
        return 'Username must be at least 3 characters long'
    }

    if (password !== rePassword) {
        return 'The password missmatch';
    }

    if (password.length <= 3) {
        return "Password must be at least 3 characters long"
    }
   
    try {
        const auth = getAuth();
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        return userCredentials.user;
    } catch (error) {
        //TODO: Email validation
        alert(error);
    }
    
    // return result;
}

