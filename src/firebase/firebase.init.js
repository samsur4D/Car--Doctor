// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAgk9tay0GNIips3iwHNLZ5Z_Q43VtmSao",
authDomain: "car-project-36e8e.firebaseapp.com",
projectId: "car-project-36e8e",
storageBucket: "car-project-36e8e.appspot.com",
messagingSenderId: "246276022238",
appId: "1:246276022238:web:235fa6f4a63fdecfb7c74f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;