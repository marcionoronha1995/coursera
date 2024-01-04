// Replace 'https://api.example.com/endpoint' with the actual API endpoint URL
const apiUrl = 'https://api.example.com/endpoint';

// Making a GET request using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON data in the response
    return response.json();
  })
  .then(data => {
    // Handle the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Fetch error:', error);
  });
