const mongoose = require('mongoose');

const drugSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  price: Number,
  isRecept: Boolean,

});

const Drug = mongoose.model('Drug', drugSchema);

module.exports = Drug;
