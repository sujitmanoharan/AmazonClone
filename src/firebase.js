import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyNq1k6OZiilH6wJqCbEyLc8FKFUh517c",
    authDomain: "amzn-clone-18653.firebaseapp.com",
    projectId: "amzn-clone-18653",
    storageBucket: "amzn-clone-18653.appspot.com",
    messagingSenderId: "445966229521",
    appId: "1:445966229521:web:b4fc390c1ec435f47351b0",
    measurementId: "G-MRNP5EL7ZN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth };