const express = require('express');
const path = require('path');
const fs = require('fs');

//Helper method.
const uuid = require('./helpers/uuid');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

//Route to homepage.
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html')));

//Route to notes page.
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, './public/notes.html')));

//Get Notes
app.get('/api/notes', (req, res) => {
res.status(200).json(`${req.method} request received to get note.`)
    console.info(`${req.method} request received to get note.`)
});

//POST request to add note
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note.`);
 
})

//Log note on terminal

//Post note to add new review

//














//Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
