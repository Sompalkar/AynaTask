const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone_no: { type: String },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
