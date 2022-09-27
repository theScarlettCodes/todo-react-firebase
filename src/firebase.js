import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPKa-pAiKJHMSrZ-iWWPnQQhxW4ohxiYg",
  authDomain: "todo-react-firebase-8f73c.firebaseapp.com",
  projectId: "todo-react-firebase-8f73c",
  storageBucket: "todo-react-firebase-8f73c.appspot.com",
  messagingSenderId: "116015098731",
  appId: "1:116015098731:web:41c8723b8fb8abb6b5fa2e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
