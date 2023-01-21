import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import Login from './login';
import Loading from '../components/Loading'
import { useEffect } from 'react';
import { collection, addDoc, serverTimestamp, doc, setDoc} from 'firebase/firestore'
import { ArrowForwardIosOutlined } from '@mui/icons-material';

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  console.log([user])

  useEffect(()=> {
    if(user){
       setDoc(doc(db, "users", user.uid),
      {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      },
      {
        merge: true
      },);
      console.log("Document written")
    }
  },[user]);

  if (loading) return <Loading />
  if(!user) return <Login />
  // <Login />
  return <Component {...pageProps} />
}
