import { initializeApp } from "@firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { firebaseConfig } from "../assets/config/firebaseConfig";

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signUp = (navigate, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            navigate("/login");
        })
        .catch((error) => {
            alert(error.code);
        });
};

export const signIn = (navigate, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            localStorage.setItem('currentUser', user)
            navigate("/");
        })
        .catch((error) => {
            alert(error.code);
        });
};

export const logOut = (navigate) => {
    signOut(auth)
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            alert(error.code);
        });
};