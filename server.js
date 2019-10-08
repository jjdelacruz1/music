const express = require('express');
const PORT = process.env.PORT || 3000;
const knex = require('./knex/knex.js');
const app = express();

app.get('/tasks', (req, res) => {
  res.send('You got here')
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});