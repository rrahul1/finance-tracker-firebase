// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0O2KCmAc97BbmK99NPOizGXkEVOSf9jA",
  authDomain: "todo-firebase-b2b19.firebaseapp.com",
  projectId: "todo-firebase-b2b19",
  storageBucket: "todo-firebase-b2b19.appspot.com",
  messagingSenderId: "223916089770",
  appId: "1:223916089770:web:72ca208b42e69ddb4b8bd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = new getFirestore(app);
