import nextId from "react-id-generator";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDktFXjdWH7jVWePAyqYhR5gmfNY6dK4ro",
  authDomain: "clone-a72e0.firebaseapp.com",
  projectId: "clone-a72e0",
  storageBucket: "clone-a72e0.appspot.com",
  messagingSenderId: "293116211654",
  appId: "1:293116211654:web:11bf10d7a2a479036182c7",
};

const app = initializeApp(firebaseConfig);

export interface Order {
  amount: number;
  amountShipping: number;
  images: string[];
  timestamp: any;
}

export const addOrderToFirebase = async (email: string, order: Order) => {
  await addDoc(collection(getFirestore(), "users", email, "orders"), order);
};
