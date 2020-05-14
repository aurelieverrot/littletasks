// Requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 4000;
const routes = require('./routes');
const db = require('./models');

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: "GET,POST,PUT,DELETE",
  credentials: true, //allows session cookies to be sent back and forth
  optionsSuccessStatus: 200 //legacy browsers
}

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to print in the terminal message after all requests
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleTimeString();
  const result = `${method} ${url} ${requestedAt}`;
  console.log(result);

  next();
});


// // API Routes
app.use("/api/v1", routes.api);
app.use("/api/*", (req, res) => {
  res.status(404).json({ status: 404, error: 'Source not found'})
});


// Server start
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));