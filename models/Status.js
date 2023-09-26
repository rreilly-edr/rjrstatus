const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

module.exports = mongoose.model('Status', statusSchema);