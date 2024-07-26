import React, { useState } from 'react';
import { Container, Button, Box } from '@mui/material';
import Header from '../components/Header';
import AddPetDialog from '../components/AddPetDialog';
import PetList from '../components/PetList';
import { mockPets } from '../mockData';

const Home = () => {
  const [pets, setPets] = useState(mockPets);
  const [openDialog, setOpenDialog] = useState(false);
  const [editPet, setEditPet] = useState(null);

  const handleOpenDialog = (pet = null) => {
    setEditPet(pet);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditPet(null);
  };

  const handleAddOrEditPet = (pet) => {
    if (editPet) {
      setPets(pets.map(p => p.id === editPet.id ? { ...pet, id: editPet.id } : p));
    } else {
      setPets([...pets, { ...pet, id: Date.now() }]);
    }
    handleCloseDialog();
  };

  const handleDeletePet = (id) => {
    setPets(pets.filter(pet => pet.id !== id));
  };

  return (
    <Box>
      <Header />
      <Container>
        <br />
        <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
          Add Pet
        </Button>
        <PetList pets={pets} onEdit={handleOpenDialog} onDelete={handleDeletePet} />
        <AddPetDialog
          open={openDialog}
          onClose={handleCloseDialog}
          onSave={handleAddOrEditPet}
          pet={editPet}
        />
      </Container>
    </Box>
  );
};

export default Home;
