import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import petService from '../services/petService';
import { Container, Box, Button } from '@mui/material';
import Header from '../components/Header';
import AddPetDialog from '../components/AddPetDialog';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [petsUpdated, setPetsUpdated] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setPets(petService.getPets());
  }, [petsUpdated]);

  const handleAddPet = (pet) => {
    petService.addPet(pet);
    setPetsUpdated(!petsUpdated);
  };

  const handleEditPet = (id, updatedPet) => {
    petService.updatePet(id, updatedPet);
    setPetsUpdated(!petsUpdated);
  };

  const handleDeletePet = (id) => {
    petService.deletePet(id);
    setPetsUpdated(!petsUpdated);
  };

  return (
    <Box>
      <Header />
      <Container>
        <Box my={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDialogOpen(true)}
          >
            Add Pet
          </Button>
        </Box>
        <Box my={2}>
          <PetList pets={pets} onEditPet={handleEditPet} onDeletePet={handleDeletePet} />
        </Box>
      </Container>
      <AddPetDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAddPet={handleAddPet}
      />
    </Box>
  );
};

export default Home;
