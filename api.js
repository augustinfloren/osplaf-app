import axios from 'axios';

// Request API.
axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'augustinfloren@gmail.com',
    password: 'Trappist13!',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });