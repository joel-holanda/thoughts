import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyAFLcIuXkSsadNYZXCkjoSh17LWlJABJu4",
  authDomain: "app01-b7f51.firebaseapp.com",
  projectId: "app01-b7f51",
  storageBucket: "app01-b7f51.appspot.com",
  messagingSenderId: "120015287878",
  appId: "1:120015287878:web:1ab16823ce01141919fc47",
  measurementId: "G-1E9SMJKW96"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)