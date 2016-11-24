var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    min: 13,
    max: 120,
    require: true,
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
