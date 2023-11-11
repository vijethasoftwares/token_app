const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// Proxy endpoint
app.use('/proxy', function(req, res) {
  // Take the base URL of your API
  const apiUrl = 'https://dev88217.service-now.com/oauth_token.do';
  const options = {
    url: apiUrl + req.url, // Proxy the request to the original API
    method: req.method,
    json: true,
    body: req.body
  };

  // Pipe the API response back to the client
  req.pipe(request(options)).pipe(res);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));