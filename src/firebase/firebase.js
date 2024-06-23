// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBw0bt1EPTen_89d5Gj1jx6z17_ge2tk",
  authDomain: "ecommercecabj-flores.firebaseapp.com",
  projectId: "ecommercecabj-flores",
  storageBucket: "ecommercecabj-flores.appspot.com",
  messagingSenderId: "1074372775235",
  appId: "1:1074372775235:web:f9d21aa3337ff327c5f3f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  //response es un QuerySnapShot - es iterable
  const listaProds = [];
  response.forEach((docu) => listaProds.push({ id: docu.id, quantity: 1,...docu.data() }));
  return listaProds;
}

export async function addOrder(order) {
  const ordersCollection = collection(db, 'orders');
  const docRef = await addDoc(ordersCollection, order);
  console.log('Doc ref generado: ' + docRef);
  console.log('Id generado: ' + docRef.id);
  return docRef.id;
}