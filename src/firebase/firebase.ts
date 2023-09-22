
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1035qzCkpr638o47CtPgK6gncbxDr3-8",
  authDomain: "codeventure-3363a.firebaseapp.com",
  projectId: "codeventure-3363a",
  storageBucket: "codeventure-3363a.appspot.com",
  messagingSenderId: "734564196797",
  appId: "1:734564196797:web:e3333ac4b051d6de6532d4"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore, app };