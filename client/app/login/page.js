'use client'

import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const  Login = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!username) {
      alert("Username cannot be blank");
      return;
    }
    const response = await axios.post('http://localhost:5001/api/login', { username });
    localStorage.setItem('sessionId', response.data.sessionId);
    localStorage.setItem('username', response.data.username);
    router.push('/comments');
  };

  return (
    <Container>
      <h1>Login</h1>
      <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={handleLogin} variant="contained" style={{ marginTop: '1rem' }}>
        Login
      </Button>
    </Container>
  );
}

export default Login;