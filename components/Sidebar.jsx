import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { IconButton, Button } from '@mui/material';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Sidebar() {

const [user] = useAuthState(auth);

const createChat = () => {
	const input = prompt('Please enter an email address for the user you would like to contact');

	if (!input) return null;

	if(EmailValidator.validate(input)){
		// We need to add the cat into the DB collection
		db.collection('chats').add({
			users: [user.email, input],
		})
	}
};

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} />

      	<IconsContainer>
        	<IconButton>
        		<ChatIcon />
        	</IconButton>
       		<IconButton>
          	<MoreVertIcon />
       		</IconButton>  
      	</IconsContainer>
			</Header>

			<Search>
				<SearchIcon />
				<SearchInput placeholder='Search in chats' />
			</Search>

			<SidebarButton onClick={createChat}>
				Start A New Chat
			</SidebarButton>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`  
	display: flex;
	align-items: center;
	padding: 20px;
	border-radius: 2px;
`;

const SidebarButton = styled(Button)`
width: 100%;

&&&{
	border-top: 1px solid whitesmoke;
	border-bottom: 1px solid whitesmoke;
}


`;

const SearchInput = styled.input`
	outline-width: 0;
	border: none;
	flex: 1;
`;

const Header = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	height: 80px;
	border-bottom: 1px solid whitesmoke;
	`;

const UserAvatar = styled(AccountCircleIcon)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const IconsContainer = styled.div``;
