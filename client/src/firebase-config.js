import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const apiKey = import.meta.env.VITE_API_KEY;

export const firebaseConfig = {
  apiKey: "AIzaSyCo7i7rKggzbIF05uxHPG-sy4LsplhElI8",
  authDomain: "hr-management-7c8f4.firebaseapp.com",
  projectId: "hr-management-7c8f4",
  storageBucket: "hr-management-7c8f4.appspot.com",
  messagingSenderId: "21096880493",
  appId: "1:21096880493:web:33d63a7b0b080d02646264",
  measurementId: "G-VHSEJWVW63",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
