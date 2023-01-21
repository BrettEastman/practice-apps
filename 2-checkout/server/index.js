require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
const { save } = require("./models/index.js");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Then, it logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Then, it serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// CONTROLLERS:
app.get('/checkout', function(req, res) {
  console.log('Hello from app.get');
  console.log(req.session_id);
  res.sendStatus(200);
});

app.post('/checkout', function(req, res) {
  let data = {...req.body, session_id: req.session_id}
  console.log(data);
  save(data, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.status(201).json(result);
    }
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
