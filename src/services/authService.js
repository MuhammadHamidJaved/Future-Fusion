import fakeFetch from './fakeFetch';

const login = async (email, password) => {
  const response = await fakeFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  return data;
};

const signup = async (email, password) => {
  const response = await fakeFetch('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  return data;
};

const logout = async () => {
  await fakeFetch('/auth/logout', {
    method: 'POST'
  });
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export default {
  login,
  signup,
  logout,
  isAuthenticated
};
