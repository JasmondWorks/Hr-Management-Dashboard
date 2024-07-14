// useFirestore.js
import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

export const useFirestoreColl = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
};
export const useFirestoreDoc = (collectionName, docId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError(new Error("Document does not exist"));
        }
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchDoc();
  }, [collectionName, docId]);

  return { data, loading, error };
};
export const useFirestoreCreate = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createDocument = async (data) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      setLoading(false);
      return docRef.id;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { createDocument, loading, error };
};
export const useFirestoreUpdate = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDocument = async (docId, newData) => {
    setLoading(true);
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, newData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { updateDocument, loading, error };
};
export const useFirestoreDelete = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteDocument = async (docId) => {
    setLoading(true);
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { deleteDocument, loading, error };
};
