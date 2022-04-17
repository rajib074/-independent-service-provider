// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kn_i6iIxhm5knbupkI_dAsLVa3dThTw",
  authDomain: "rajib-10a40.firebaseapp.com",
  projectId: "rajib-10a40",
  storageBucket: "rajib-10a40.appspot.com",
  messagingSenderId: "620538337465",
  appId: "1:620538337465:web:9bb6a60c44a9ea2c5d2368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;