const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  haveRecept: Boolean,
  wallet: Number
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
