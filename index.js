require('dotenv').config();

// Express Stuff
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
// Mongo Wrapper
const mongoose = require('mongoose');

// Models
// const post = require('./Models/Posts')

// Supporting Libraries
const bodyParser = require('body-parser');

// Globals
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URI;


app.use(cors())
app.use(bodyParser.json());
app.use('/', require('./Routes'));

// Configure Database
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// if(process.env.NODE_ENV === 'production'){

  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })

 //

// Import Routes

// Start App
const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${PORT}`);
});