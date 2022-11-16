const express = require('express');
const cors = require('cors');
const path = require('path');

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());

/**
 * -------------- ROUTES ----------------
 */
app.use(require('./routes'));

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

/**
 * -------------- SERVER ----------------
 */
const port = process.env.PORT || 8080;

// Server listens on http://localhost:8080
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
