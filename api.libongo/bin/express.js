const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const db            = require('../models/database');
const cotacaoRouter = require('../routes/cotacao-router');
const app           = express();

app.use(cors());

db.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a base de dados!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/cotacao', cotacaoRouter);

module.exports = app;