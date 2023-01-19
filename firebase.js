import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDksgY1r_mywer38GCHBdFQNrpcomTv4Hg",
    authDomain: "tidings-5bf8a.firebaseapp.com",
    projectId: "tidings-5bf8a",
    storageBucket: "tidings-5bf8a.appspot.com",
    messagingSenderId: "27892952118",
    appId: "1:27892952118:web:797e9e7b0448e070b8bc97"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, app }; 