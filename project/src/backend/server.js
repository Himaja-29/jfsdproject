const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

// Create Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'Saikiran@29', // Replace with your MySQL password
  database: 'mutualfunds', // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API route to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM signup'; // Replace with your table name
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
