'use strict'
const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const cotacaoRouter = require('../routes/cotacao-router');
const app           = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/cotacao', cotacaoRouter);

module.exports = app;