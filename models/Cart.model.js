const mongoose = require('mongoose');

const cartSchema =  mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  medications: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medication',
      required: true
  }],
  totalPrice: Number
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
