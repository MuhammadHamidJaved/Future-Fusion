import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const PetCard = ({ pet, onEdit, onDelete }) => {
  const handleEdit = () => {
    const newName = prompt('Enter new name:', pet.name);
    const newType = prompt('Enter new type:', pet.type);
    const newBreed = prompt('Enter new breed:', pet.breed);
    const newAge = prompt('Enter new age:', pet.age);
    if (newName && newType && newBreed && newAge) {
      onEdit(pet.id, { name: newName, type: newType, breed: newBreed, age: newAge });
    }
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h3">
          <label>Id: </label>
          {pet.id}
        </Typography>
        <Typography variant="body">
          <label>Name: </label>
          {pet.name}
        </Typography>
        <Typography variant="body2">
          <label>Type: </label>
          {pet.type}
        </Typography>
        <Typography variant="body2">
          <label>Breed: </label>
           {pet.breed} 
        </Typography>
        <Typography variant="body2">
          <label>Age: </label>
           {pet.age} years old
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleEdit}>Edit</Button>
        <Button size="small" color="error" onClick={() => onDelete(pet.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
