import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const EditPet = ({ pet, onEditPet, onCancel }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (pet) {
      setName(pet.name);
      setType(pet.type);
      setBreed(pet.breed);
      setAge(pet.age);
    }
  }, [pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditPet(pet.id, { name, type, breed, age });
    onCancel(); // Close the edit form after submission
  };

  return (
    <Box my={4}>
      <Typography variant="h6" component="h2" gutterBottom>
        Edit Pet
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
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default EditPet;
