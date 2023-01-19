import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import Login from './login';

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  console.log(user);

  if (loading) return <Loading />
  if(!user) return <Login />
  // <Login />
  return <Component {...pageProps} />
}
