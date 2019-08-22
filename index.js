require('dotenv').config();

// Express Stuff
const express = require('express');
const app = express();
const cors = require('cors')
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


// Import Routes

// Start App
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});