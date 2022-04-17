import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAmMAlVeWW-0YWrVmed9KIMgILmu7aPdqk",
  authDomain: "teacher-3404a.firebaseapp.com",
  projectId: "teacher-3404a",
  storageBucket: "teacher-3404a.appspot.com",
  messagingSenderId: "1010650773063",
  appId: "1:1010650773063:web:8ff65efe51ecf9c8c7a362"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
