const express = require('express');

const homeRoutes = require('./routes/homeroutes');
const apiRoutes = require('./routes/apiroutes')
//Helper method.


const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(homeRoutes)
app.use(apiRoutes)


//Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
