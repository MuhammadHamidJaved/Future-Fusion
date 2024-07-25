import React from 'react';
import PetCard from './PetCard';
import { Box } from '@mui/material';

const PetList = ({ pets, onEditPet, onDeletePet }) => {
  return (
    <Box>
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} onEdit={onEditPet} onDelete={onDeletePet} />
      ))}
    </Box>
  );
};

export default PetList;
