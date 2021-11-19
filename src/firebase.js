import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyATbJOn4p2blTLav_S_as6A3AsukPOFI1A",
    authDomain: "app-6b0fa.firebaseapp.com",
    projectId: "app-6b0fa",
    storageBucket: "app-6b0fa.appspot.com",
    messagingSenderId: "7653985500",
    appId: "1:7653985500:web:d23823ce90256d1557b819",
    measurementId: "G-7FRMRZWP41"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };