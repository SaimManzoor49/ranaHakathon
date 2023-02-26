// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXzR5YvQYnP1BDLtyA3OnrvGw9B4C-KM4",
  authDomain: "hakaton-b0de9.firebaseapp.com",
  projectId: "hakaton-b0de9",
  storageBucket: "hakaton-b0de9.appspot.com",
  messagingSenderId: "872579057488",
  appId: "1:872579057488:web:cb406ede6b5967238e8e55",
  measurementId: "G-9SJF1Q4ZNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);
export {auth,fireStore,storage}