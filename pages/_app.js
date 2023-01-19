import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import Login from './login';
import Loading from '../components/Loading'
import { useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore'
import { updateEmail } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set } from 'firebase/database'

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      updateEmail(auth.currentUser, "user@example.com").then(() => {
        //Email updated!!
      }).catch((error) => {
        //An Error Occured
      });
    }

    // if (user) {
    //   const userRef = doc(db, "users", "id");
    //   setDoc(userRef, {
    //     email: user.email,
    //     lastSeen: FirebaseError.firestore.FieldValue.serverTimestamp(),
    //     photoURL: user.photoURL,
    //   }, { merge: true});
    // }

    // if (user) {
    //   () => {
    //       const db = getDatabase();
    //       set(ref(db, 'users/' + userId), {
    //         email: user.email,
    //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
    //         photoURL: user.photoURL,
    //       })
    //   }

    // }


}, [user])


  if (loading) return <Loading />
  if(!user) return <Login />
  // <Login />
  return <Component {...pageProps} />
}
