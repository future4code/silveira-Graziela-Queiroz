import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { StyledToobar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <StyledToobar>
        <Button onClick={() => goToFeed(navigate)} color="inherit">labEddit</Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">login</Button>
      </StyledToobar>
    </AppBar>
  );
}
export default Header