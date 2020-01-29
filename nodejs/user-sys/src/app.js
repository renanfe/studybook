const express = require('express');
const appRouter = require('./routes/app.routes');
const usersRouter = require('./routes/user.routes');
const bodyparser = require('body-parser');
var mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/estudos2', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(appRouter);
app.use('/api', usersRouter);

module.exports = app;