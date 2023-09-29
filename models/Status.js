const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  expiration: Date,
  message: String,
  tags: Array,
  start: Date,
  end: Date,
  update: Array,
  
});

module.exports = mongoose.model('Status', statusSchema);