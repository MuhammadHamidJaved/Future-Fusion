import React from 'react';
import Signup from '../components/Signup';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header'; 

const SignupPage = () => {
  return (
    <Box>
      <Header /> 
      <Container maxWidth="xs">
        <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Signup
        </Typography>
          <Signup />
        </Box>
      </Container>
    </Box>
  );
};

export default SignupPage;
