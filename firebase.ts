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
  getDocs,
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

export interface OrderType {
  amount: number;
  amountShipping: number;
  images: string[];
  timestamp: string;
}

export interface NewOrder extends OrderType {
  id: string;
}

export const addOrderToFirebase = async (email: string, order: OrderType) => {
  await addDoc(collection(getFirestore(), "users", email, "orders"), order);
};

export const getOrdersFromFirebase = async (email: string) => {
  const q = query(
    collection(getFirestore(), "users", email, "orders"),
    orderBy("timestamp", "desc")
  );

  const orders = await getDocs(q);
  const newOrders: NewOrder[] = await Promise.all(
    orders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amountShipping,
      images: order.data().images,
      timestamp: new Date(order.data().timestamp).toLocaleDateString("en-US"),
    }))
  );

  return newOrders;
};
