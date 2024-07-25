import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography, Link } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/home');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box my={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Don't have an account?{' '}
            <Link href="/signup" color="primary">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
