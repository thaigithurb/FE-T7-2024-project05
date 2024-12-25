// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ZEijSc-nRuy8MRg7ajTyhJwwgO9UPo8",
  authDomain: "project05-85f95.firebaseapp.com",
  databaseURL: "https://project05-85f95-default-rtdb.firebaseio.com",
  projectId: "project05-85f95",
  storageBucket: "project05-85f95.firebasestorage.app",
  messagingSenderId: "1030587277006",
  appId: "1:1030587277006:web:fde743dc0d89b757ce3a9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);