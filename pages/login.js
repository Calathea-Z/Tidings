import styled from 'styled-components';
import Head from 'next/head';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth';

function Login() {

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
     }

    return (
        <Container>

            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo />
                <Button onClick={signIn} variant='outlined'>Sign in with Google</Button>
            </LoginContainer>
        
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px; 
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled(WhatsAppIcon)`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;