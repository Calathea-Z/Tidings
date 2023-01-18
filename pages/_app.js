import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />

  return <Component {...pageProps} />
}
