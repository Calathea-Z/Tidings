import styled from 'styled-components';
import Head from 'next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function login() {
    return (
        <Container>
            <Head>
                <title>
                    Login
                </title>
            </Head>

            <LoginContainer>
                <Logo />
                <Button variant='outlined'>Sign in with Google</Button>
            </LoginContainer>

        </Container>
    )
}

export default login

const Container = styled.div`

`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Logo = styled(WhatsAppIcon)`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;