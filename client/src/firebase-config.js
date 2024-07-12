import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo7i7rKggzbIF05uxHPG-sy4LsplhElI8",
  authDomain: "hr-management-7c8f4.firebaseapp.com",
  projectId: "hr-management-7c8f4",
  storageBucket: "hr-management-7c8f4.appspot.com",
  messagingSenderId: "21096880493",
  appId: "1:21096880493:web:33d63a7b0b080d02646264",
  measurementId: "G-VHSEJWVW63",
};

fetch("http://localhost:3000/admins")
  .then((res) => res.json())
  .then((adminsData) => {});

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function addDocument(entity, collectionName) {
  try {
    const docRef = await addDoc(collection(db, collectionName), entity);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}
