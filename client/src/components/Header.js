import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/');
  };

  return (
    <AppBar position='static' style={{ backgroundColor: '#51AFA1', marginBottom: '40px' }}>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          {/* <a href='/'>
            
          </a> */}
          <Box flexGrow={1} />
          <Box display='flex' alignItems='center'>
            {isLoggedIn ? (
              <CustomButton text="Logout" handleClick={handleLogout} />
            ) : (
              <>
                <CustomButton text="Login" handleClick={handleLoginClick} />
                <Box ml={1} />
                <CustomButton text="Register" handleClick={handleRegisterClick} />
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
