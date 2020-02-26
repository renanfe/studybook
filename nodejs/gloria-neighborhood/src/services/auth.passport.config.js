const User = require('../models/user.model')
const BasicStrategy = require('passport-http').BasicStrategy

const basicStrategy = new BasicStrategy(
  function(username, password, done) {    
    User.findOne({ username: username, password: password }, function (err, user) {      
      console.log(user);
      if (err) { return done(err) }
      if (!user) { return done(null, false) }
      return done(null, user);
    });
  }
);

module.exports = { basicStrategy };