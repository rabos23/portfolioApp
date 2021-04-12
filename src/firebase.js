import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1BtchmG7yC1j0SjuO4rfIPWqaH0kj6kQ",
  authDomain: "portfolioapp-74be9.firebaseapp.com",
  projectId: "portfolioapp-74be9",
  storageBucket: "portfolioapp-74be9.appspot.com",
  messagingSenderId: "863415751341",
  appId: "1:863415751341:web:5828fd0abc0b4922a66c24",
});
export const auth = app.auth();
export const firestore = app.firestore();
export default app;
