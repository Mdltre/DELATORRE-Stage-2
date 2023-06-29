const express = require('express');

const app = express();
const PORT = 3000;
const FAVORITE_LANGUAGE = 'Python';

app.get('/programming-language', (req, res) => {
  res.send(`My favorite programming language is ${FAVORITE_LANGUAGE}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});