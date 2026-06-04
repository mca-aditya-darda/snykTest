const express = require('express');
const _ = require('lodash');
const minimist = require('minimist');
const axios = require('axios');

const app = express();
const port = 3000;

// Example of using minimist to parse command-line arguments
const argv = minimist(process.argv.slice(2));
console.log('Parsed arguments:', argv);

// Example of using lodash
const defaults = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log('Lodash default values:', defaults);

app.get('/', (req, res) => {
  res.send('Hello World! This is a vulnerable application for Snyk scanning.');
});

// A dummy route that triggers a fetch request via axios
app.get('/fetch', async (req, res) => {
  const url = req.query.url || 'https://httpbin.org/get';
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Vulnerable app listening at http://localhost:${port}`);
});
