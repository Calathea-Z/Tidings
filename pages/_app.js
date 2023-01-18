import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import login from './login';

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />

  return <Component {...pageProps} />
}
