const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  color: String,
  lovesLasagna: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Cat', catSchema);

