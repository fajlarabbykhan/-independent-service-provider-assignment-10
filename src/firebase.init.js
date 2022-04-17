// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzmF-QziUyOhb-nL1E7qaTmdVBnFNr4jI",
    authDomain: "aita-law-llc.firebaseapp.com",
    projectId: "aita-law-llc",
    storageBucket: "aita-law-llc.appspot.com",
    messagingSenderId: "883868373881",
    appId: "1:883868373881:web:e87e20ee61b6d45e2855a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth