const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb://localhost:27017/devradar', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;