import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDO6uz4Yct9TyaSJTsvtgzcZmxLzSSHbY4",
  authDomain: "facebook-clone-a2cea.firebaseapp.com",
  databaseURL: "https://facebook-clone-a2cea.firebaseio.com",
  projectId: "facebook-clone-a2cea",
  storageBucket: "facebook-clone-a2cea.appspot.com",
  messagingSenderId: "243102064402",
  appId: "1:243102064402:web:a888f5ad8060e2efb45dcb",
  measurementId: "G-QKWVE190WZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
