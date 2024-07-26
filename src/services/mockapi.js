const mockapi = async (url, options = {}) => {
    const { method = 'GET', body } = options;
  
    await new Promise(resolve => setTimeout(resolve, 500));
  
    const parseBody = body ? JSON.parse(body) : null;
  
    switch (url) {
      case '/auth/login':
        if (method === 'POST') {
          const { email, password } = parseBody;
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const user = users.find(user => user.email === email && user.password === password);
          if (user) {
            const token = btoa(`${email}:${password}`);
            localStorage.setItem('token', token);
            return { json: async () => ({ token }) };
          } else {
            throw new Error('Invalid credentials');
          }
        }
        break;
      case '/auth/signup':
        if (method === 'POST') {
          const { email, password } = parseBody;
          let users = JSON.parse(localStorage.getItem('users')) || [];
          const userExists = users.some(user => user.email === email);
          if (userExists) {
            throw new Error('User already exists');
          } else {
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            return { json: async () => ({ message: 'Signup successful' }) };
          }
        }
        break;
      case '/auth/logout':
        if (method === 'POST') {
          localStorage.removeItem('token');
          return { json: async () => ({ message: 'Logout successful' }) };
        }
        break;
      case '/pets':
        if (method === 'GET') {
          const pets = JSON.parse(localStorage.getItem('pets')) || [];
          return { json: async () => pets };
        }
        if (method === 'POST') {
          const pets = JSON.parse(localStorage.getItem('pets')) || [];
          const newPet = { id: Date.now(), ...parseBody };
          pets.push(newPet);
          localStorage.setItem('pets', JSON.stringify(pets));
          return { json: async () => newPet };
        }
        break;
      case '/pets':
        if (method === 'PUT') {
          const pets = JSON.parse(localStorage.getItem('pets')) || [];
          const petIndex = pets.findIndex(pet => pet.id === parseBody.id);
          pets[petIndex] = parseBody;
          localStorage.setItem('pets', JSON.stringify(pets));
          return { json: async () => parseBody };
        }
        break;
      case '/pets':
        if (method === 'DELETE') {
          const pets = JSON.parse(localStorage.getItem('pets')) || [];
          const updatedPets = pets.filter(pet => pet.id !== parseBody.id);
          localStorage.setItem('pets', JSON.stringify(updatedPets));
          return { json: async () => ({ message: 'Delete successful' }) };
        }
        break;
      default:
        throw new Error('Unknown URL');
    }
  };
  
  export default mockapi;
  