// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5kfNCCdXzk1ffg-aUOUKfCixio2g4qe8",
    authDomain: "mstone-9-cept-part.firebaseapp.com",
    projectId: "mstone-9-cept-part",
    storageBucket: "mstone-9-cept-part.firebasestorage.app",
    messagingSenderId: "888405327248",
    appId: "1:888405327248:web:00d00bd3e0133bd2908715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

