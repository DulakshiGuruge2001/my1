const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
  res.render('index', { message: "Hello from Railway CI/CD!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});