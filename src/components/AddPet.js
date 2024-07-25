import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddPet = ({ onAddPet }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPet({ name, type, breed, age });
    setName('');
    setType('');
    setBreed('');
    setAge('');
  };

  return (
    <Box my={4}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Pet
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Type"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          label="Breed"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          label="Age"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Pet
        </Button>
      </form>
    </Box>
  );
};

export default AddPet;
