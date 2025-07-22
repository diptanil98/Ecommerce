const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Object, required: true }],
  amount: { type: Number, required: true },
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  status: { type: String, default: 'created' },
  createdAt: { type: Date, default: Date.now },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema, 'orders');