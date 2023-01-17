import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

import styled from "styled-components";
import { IconButton } from '@mui/material';

function Sidebar() {
  return (
    <Container>
      <Header>
        <Avatar/>
      </Header>
      <IconsContainer>
        <IconButton>
        	<ChatIcon />
        </IconButton>
       <IconButton>
          <MoreVertIcon />
       </IconButton>  
      </IconsContainer>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const Avatar = styled(AccountCircleIcon)``;

const IconsContainer = styled.div``;
