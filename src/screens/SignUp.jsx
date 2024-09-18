// src/auth/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User signed up!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={() => navigate('/')}>Go to Login</button> {/* Button to switch to Login */}
    </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  input: {
    width: '300px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '150px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  switchButton: {
    width: '150px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SignUp;
