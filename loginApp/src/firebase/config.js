import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBOHb8HL3xDGyq6C93187JbfJgEzI8sbGs",
  authDomain: "mfe-auth.firebaseapp.com",
  projectId: "mfe-auth",
  storageBucket: "mfe-auth.appspot.com",
  messagingSenderId: "658164976595",
  appId: "1:658164976595:web:cf8f2583b09ea759ccbd26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
