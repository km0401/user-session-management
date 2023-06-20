import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
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
        window.location.href = '/map'; // Redirect to the map page
      }
    } catch (error) {
        console.error('Error during login:', error);
        setError('Invalid username or password');
      // Display error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
