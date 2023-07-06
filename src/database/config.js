// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYDB5ES7cAOFArtCHbirjSPIXHF3GhD8U",
  authDomain: "todo-app-74598.firebaseapp.com",
  projectId: "todo-app-74598",
  storageBucket: "todo-app-74598.appspot.com",
  messagingSenderId: "255431403748",
  appId: "1:255431403748:web:d6a79b97cdcfdf653fa4f1",
  measurementId: "G-S19QG6632G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


