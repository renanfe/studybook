const mongoose = require('mongoose');
const PointSchema = require('../utils/pointschema');

const devSchema = new mongoose.Schema({
  name: { type: String },
  github_username: { type: String},
  bio: { type: String },
  avatar_url: { type: String },
  techs: [ {type: String} ],
  location: { type: PointSchema, index: '2dsphere'}
});

module.exports = mongoose.model('dev', devSchema);