const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 60,
    required: true,
    lowercase: true,
    trim: true
  },
  lastname : {
    type: String,
    minlength: 3,
    maxlength: 60,
    required: true,
    trim:true,
    lowercase: true
  },
  email : {
    type: String,
    maxlength: 300,
    required: true,
    lowercase: true,
    trim:true,
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    , 'is not a valide email']
  }
}, { timestamps: true, versionKey: false });

module.exports = mongooose.model('users', userSchema);