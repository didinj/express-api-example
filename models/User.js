var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullname: String,
  avatar: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
