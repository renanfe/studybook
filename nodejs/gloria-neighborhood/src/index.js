const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const UserRoute = require('./routes/user.route')
const HomeRoute = require('./routes/home.route')
const AuthConfig = require('./services/auth.passport.config')
var helmet = require('helmet');

const app = express()
const mongourl = process.env.MONGODB_PATH || 'mongodb://localhost:27017/gloria'

mongoose.connect(mongourl, { useUnifiedTopology: true, useNewUrlParser: true }, err => err ? console.log(err) : console.log(`Mongodb Connected on ${mongourl}`));

app.use(helmet());
app.use(cors())
app.use(flash());
app.disable('x-powered-by');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize());
passport.use(AuthConfig.basicStrategy)
app.use('/api', UserRoute)
app.use('/api', HomeRoute)
app.use('*', (req, res) => res.status(404).json({ message: 'aaa'}))

module.exports = { app , mongoose };