const express = require('express');
const path = require('path');
const fs = require('fs');

//Helper method.

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

//Route to home page.
app.get('/', (req, res) =>
res.sendFile(path.join(Develop, './public/index.html')));

//Route to notes page.
app.get('/notes', (req, res) => 
res.sendFile(path.join(Develop, './public/notes.html')));

//














//Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
