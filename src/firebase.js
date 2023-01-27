import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5bV0Ml3VSp2fTTPnonRq5Lb_nsdYHxJk",
  authDomain: "todo-app-c1f08.firebaseapp.com",
  projectId: "todo-app-c1f08",
  storageBucket: "todo-app-c1f08.appspot.com",
  messagingSenderId: "38855133410",
  appId: "1:38855133410:web:887467568275b3967476bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)