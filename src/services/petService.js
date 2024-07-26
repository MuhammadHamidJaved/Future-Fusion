import mockapi from './mockapi';

const getPets = async () => {
  const response = await mockapi('/pets', {
    method: 'GET'
  });
  const data = await response.json();
  return data;
};

const addPet = async (pet) => {
  const response = await mockapi('/pets', {
    method: 'POST',
    body: JSON.stringify(pet)
  });
  const data = await response.json();
  return data;
};

const updatePet = async (id, updatedPet) => {
  const response = await mockapi(`/pets/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ id, ...updatedPet })
  });
  const data = await response.json();
  return data;
};

const deletePet = async (id) => {
  const response = await mockapi(`/pets/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ id })
  });
  const data = await response.json();
  return data;
};

export default {
  getPets,
  addPet,
  updatePet,
  deletePet
};
