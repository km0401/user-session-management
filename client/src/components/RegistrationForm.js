import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Card, Box, Typography, TextField, Alert} from '@mui/material'
import CustomButton from './CustomButton';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        fullName,
        username,
        email,
        password
      });

      if (response.status === 200) {
        console.log('Registration successful');
        // Redirect the user to the login page
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Display error message to the user
    }
  };

  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
    <Card sx={{ borderRadius:'10px',width: '35%'}}>
    <Box p={4}>
      <Typography variant="h5" mb={1} gutterBottom sx={{textAlign:'center',fontWeight:500}}>
        Registration Page
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
      label="Full Name"
      value={fullName}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={(e) => setFullName(e.target.value)}
      InputProps={{ style: { fontSize: '15px' } }}
              InputLabelProps={{ style: { fontSize: '15px' } }}
              size='small'
      />
      <TextField
      label="Username"
      value={username}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={(e) => setUsername(e.target.value)}
      InputProps={{ style: { fontSize: '15px' } }}
              InputLabelProps={{ style: { fontSize: '15px' } }}
              size='small'
      />
      <TextField
      label="Email"
      value={email}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={(e) => setEmail(e.target.value)}
      InputProps={{ style: { fontSize: '15px' } }}
              InputLabelProps={{ style: { fontSize: '15px' } }}
              size='small'
      />
      <TextField
      label="Password"
      value={password}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={(e) => setPassword(e.target.value)}
      InputProps={{ style: { fontSize: '15px' } }}
              InputLabelProps={{ style: { fontSize: '15px' } }}
              size='small'
      />
      <Box sx={{ width: '100%', mt: 2, display: 'flex', justifyContent: 'center' }}>
            <CustomButton  text={'Register'} handleClick={handleSubmit}/>
            </Box>
      </Box>
      </Card>
      </div>
  );
};

export default RegistrationForm;
