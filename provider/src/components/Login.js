// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Send a login request to the backend
    axios.post('http://localhost:3000/doctors/login', { username, password })
      .then((response) => {
        // If successful, pass the doctor information to the parent component
        onLogin(response.data);
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
