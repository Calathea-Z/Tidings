import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDksgY1r_mywer38GCHBdFQNrpcomTv4Hg",
    authDomain: "tidings-5bf8a.firebaseapp.com",
    projectId: "tidings-5bf8a",
    storageBucket: "tidings-5bf8a.appspot.com",
    messagingSenderId: "27892952118",
    appId: "1:27892952118:web:797e9e7b0448e070b8bc97"
  };

const app = !firebase.apps.length
     ? firebase.initializeApp(firebaseConfig) 
     : firebase.app()

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };