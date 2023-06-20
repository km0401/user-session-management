import { useState } from 'react';
import axios from 'axios';
import { Card, Box, Typography, TextField } from '@mui/material';
import CustomButton from './CustomButton';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.status === 200) {
        // Save the token in local storage or a cookie
        localStorage.setItem('token', response.data.token);
        handleLogin(); // Update the login state in the parent component
        window.location.href = '/map'; // Redirect to the map page
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid username or password');
      // Display error message to the user
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Card sx={{ borderRadius: '10px', width: '35%' }}>
        <Box p={4}>
          <Typography variant="h5" mb={1} gutterBottom sx={{ textAlign: 'center', fontWeight: 500 }}>
            Login Page
          </Typography>
          <TextField
            label="Username"
            value={username}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{ style: { fontSize: '15px' } }}
            InputLabelProps={{ style: { fontSize: '15px' } }}
            size="small"
          />
          <TextField
            label="Password"
            value={password}
            type="password"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { fontSize: '15px' } }}
            InputLabelProps={{ style: { fontSize: '15px' } }}
            size="small"
          />
          {error && <Box className="error">{error}</Box>}
          <Box sx={{ width: '100%', mt: 2, display: 'flex', justifyContent: 'center' }}>
            <CustomButton text={'Login'} handleClick={handleSubmit} />
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default LoginForm;
