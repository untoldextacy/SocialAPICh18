const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mediaapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
