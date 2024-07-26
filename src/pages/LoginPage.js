import React from 'react';
import Login from '../components/Login';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header'; 

const LoginPage = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="xs">
        <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
          <Login />
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
