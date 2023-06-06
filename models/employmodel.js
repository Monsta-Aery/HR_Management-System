const mongoose = require('mongoose');

const employSchema = new mongoose.Schema({
  name: String,
  eid: String,
  gender: String,
  date: String,
  designation: String,
  department: String,
  appointmentdate: String,
});

// Create a Employ model from the schema
const Employ = mongoose.model('Employ', employSchema);

module.exports = Employ;
