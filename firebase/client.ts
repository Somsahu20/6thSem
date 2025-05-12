// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ONh7in5Oy974jYIkbzdSDQadi-zwBdo",
  authDomain: "interview-ed4b5.firebaseapp.com",
  projectId: "interview-ed4b5",
  storageBucket: "interview-ed4b5.firebasestorage.app",
  messagingSenderId: "1028905915598",
  appId: "1:1028905915598:web:a27501b588652679ecac9f",
  measurementId: "G-EWC8CNR94C",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
