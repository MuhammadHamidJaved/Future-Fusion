import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const PetCard = ({ pet, onEdit, onDelete }) => (
  <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {pet.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Type: {pet.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Breed: {pet.breed}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Age: {pet.age}
      </Typography>
    </CardContent>
    <IconButton onClick={() => onEdit(pet)} color="primary">
      <EditIcon />
    </IconButton>
    <IconButton onClick={() => onDelete(pet.id)} color="secondary">
      <DeleteIcon />
    </IconButton>
  </Card>
);

export default PetCard;
