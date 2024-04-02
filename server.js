const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });


// app.get('/octect', (req, res) => {
//     res.sendFile(path.join(__dirname, '/'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'octect', 'index.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/style.css', (req, res) => {
//     res.sendFile(__dirname + '/style.css');
//   });

// app.post('/submit', (req, res) => {
//   res.redirect('/'); 
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });