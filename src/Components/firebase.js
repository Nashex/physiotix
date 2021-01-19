import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjLa4tggnCTPi-lzwuVV8iSZsJCer_3SE",
    authDomain: "physiotix-6e836.firebaseapp.com",
    projectId: "physiotix-6e836",
    storageBucket: "physiotix-6e836.appspot.com",
    messagingSenderId: "551264835817",
    appId: "1:551264835817:web:8c4a0f475290b00de13878",
    measurementId: "G-EL226Q7E7X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;