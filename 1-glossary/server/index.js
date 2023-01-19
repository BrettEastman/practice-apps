require("dotenv").config();
const express = require("express");
const path = require("path");
const { save, getAll } = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// CONTROLLERS:
app.post('/words', function(req, res) {
  save(req.body)
    .then(function(results) {
      res.sendStatus(201);
    })
    .catch(function(err) {
      res.sendStatus(400)
    });
});

app.get('/words', function(req, res) {
  getAll()
    .then((data) => {
      res.send(data)
    });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
