const getPets = () => {
    return JSON.parse(localStorage.getItem('pets')) || [];
  };
  
  const addPet = (pet) => {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const newPet = { ...pet, id: Date.now().toString() };
    pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));
    return newPet;
  };
  
  const updatePet = (id, updatedPet) => {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const petIndex = pets.findIndex(pet => pet.id === id);
    
    if (petIndex !== -1) {
      pets[petIndex] = { ...pets[petIndex], ...updatedPet };
      localStorage.setItem('pets', JSON.stringify(pets));
    }
  };
  
  const deletePet = (id) => {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const updatedPets = pets.filter(pet => pet.id !== id);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
  };
  
  export default {
    getPets,
    addPet,
    updatePet,
    deletePet,
  };
  