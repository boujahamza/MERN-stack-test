var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost:27017/TPnodejs');

var loginAttempt = mongoose.Schema({
    name: String,
    password: String
});

var Person = mongoose.model("Person", loginAttempt,"accounts");

module.exports = {
    Person: Person
  }