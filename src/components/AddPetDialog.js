import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AddPetDialog = ({ open, onClose, onAddPet }) => {
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
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Pet</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Type"
            fullWidth
            variant="outlined"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Breed"
            fullWidth
            variant="outlined"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Age"
            fullWidth
            variant="outlined"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPetDialog;
