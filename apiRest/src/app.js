const express = require('express');
const indexRotas = require('./routes/index.routes');
const app = express()

app.use(indexRotas);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


module.exports = app;