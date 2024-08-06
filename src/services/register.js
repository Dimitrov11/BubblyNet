import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/cordova";

export function registerUser(name, email, password, rePassword) {
    const auth = getAuth();
    const result = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {return userCredentials.user})
    .catch((err) => {
        alert(err);
    });
    
    return result;
}

