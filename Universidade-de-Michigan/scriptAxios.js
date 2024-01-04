const axios = require('axios');

// Replace 'https://api.example.com/endpoint' with the actual API endpoint URL
const apiUrl = 'https://api.example.com/endpoint';

// Making a GET request using axios
axios.get(apiUrl)
  .then(response => {
    // Handle the data from the API
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors during the request
    console.error('Axios error:', error);
  });
