import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography, Link } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(email, password);
      navigate('/login');
    } catch (err) {
      console.error('Signup failed', err);
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
            Signup
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Already have an account?{' '}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
