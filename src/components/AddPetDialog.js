import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AddPetDialog = ({ open, onClose, onSave, pet }) => {
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

  const handleSave = () => {
    onSave({ name, type, breed, age });
    setName('');
    setType('');
    setBreed('');
    setAge('');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{pet ? 'Edit Pet' : 'Add Pet'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Type"
          fullWidth
          variant="outlined"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Breed"
          fullWidth
          variant="outlined"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Age"
          type="number"
          fullWidth
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPetDialog;
