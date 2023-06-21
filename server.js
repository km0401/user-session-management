const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your web application or perform further actions
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Create User schema
const userSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// API route for user registration
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// API route for user login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, 'secret_key');

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// API route for user logout (optional)
app.post('/api/logout', (req, res) => {
  // Perform logout actions, such as clearing the session or token
  res.status(200).json({ message: 'User logged out' });
});

