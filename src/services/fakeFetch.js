const fakeFetch = async (url, options = {}) => {
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
          const users = JSON.parse(localStorage.getItem('users')) || [];
          if (users.find(user => user.email === email)) {
            throw new Error('User already exists');
          }
          users.push({ email, password });
          localStorage.setItem('users', JSON.stringify(users));
          return { json: async () => ({ success: true }) };
        }
        break;
      case '/auth/logout':
        if (method === 'POST') {
          localStorage.removeItem('token');
          return { json: async () => ({ success: true }) };
        }
        break;
      
      default:
        throw new Error('Unknown endpoint');
    }
  };
  
  export default fakeFetch;
  