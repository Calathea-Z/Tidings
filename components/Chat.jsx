import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Chat = ( { id, user } ) => {
  return (
    <Container>
        <UserAvatar />
        <p>Recipient Email</p>
    </Container>
  )
}

export default Chat;

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb;
    }

`;

const UserAvatar = styled(AccountCircleIcon)`
    margin: 5px;
    margin-right: 15px;
`;