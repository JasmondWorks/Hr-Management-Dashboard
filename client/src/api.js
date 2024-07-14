import { db } from "./firebase-config.js";
import {
  getDoc,
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const getAdmin = async (id) => {
  const adminDocRef = doc(db, "admins", id);
  let data,
    error,
    isLoading = true;
  try {
    data = await getDoc(adminDocRef);
    if (!data) {
      error = "Error getting employees";
      throw new Error(error);
    }

    data = data.data();
    // console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading };
};
getAdmin("339Jb6nK0lsTOBUwQnlL");

const employeesCollectionRef = collection(db, "employees");

export const getEmployees = async () => {
  let data,
    error,
    isLoading = true;
  try {
    data = await getDocs(employeesCollectionRef);
    if (!data) {
      error = "Error getting employees";
      throw new Error(error);
    }

    data = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading };
};

export const getEmployee = async (id) => {
  const employeeDocRef = doc(db, "employee", id);
  let data,
    error,
    isLoading = true;

  try {
    data = await getDoc(employeeDocRef);
    if (!data) {
      error = "Error getting employees";
      throw new Error(error);
    }

    data = data.data();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading };
};

export const createEmployee = async (obj) => {
  await addDoc(employeesCollectionRef, obj);
};
export const updateEmployee = async (id, obj) => {
  const employeeDocumentRef = doc(db, "employees", id);
  await updateDoc(employeeDocumentRef, obj);
};
export const deleteEmployee = async (id) => {
  const employeeDocumentRef = doc(db, "employees", id);
  await deleteDoc(employeeDocumentRef);
};
