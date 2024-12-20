const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  instructor: { type: String, required: true },
  schedule: { type: Date, required: true },
  capacity: { type: Number, required: true },
});

module.exports = mongoose.model('Class', ClassSchema);
