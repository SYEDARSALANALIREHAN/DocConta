// Import the necessary libraries
const express = require('express');
const mysql = require('mysql2');

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const PORT = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'mysql', // Use the Docker Compose service name for the database
  user: 'root',
  password: 'password', // Replace with your MySQL root password
  database: 'testdb', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  db.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      res.status(500).send('Error querying the database');
    } else {
      res.send(`Hello, World! Current database time is: ${results[0].currentTime}`);
    }
  });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

