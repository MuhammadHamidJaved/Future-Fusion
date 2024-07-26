import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, onEdit, onDelete }) => (
  <div>
    {pets.map((pet) => (
      <PetCard key={pet.id} pet={pet} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default PetList;
