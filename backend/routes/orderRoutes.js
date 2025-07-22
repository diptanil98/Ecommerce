const express = require('express');
const Razorpay = require('razorpay');
const Order = require('../models/order');
const router = express.Router();
router.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Razorpay order
router.post('/create-order', async (req, res) => {
  const { amount, currency = 'INR', receipt } = req.body;
  try {
    const options = { amount: amount * 100, currency, receipt };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json(
      
      { error: 'Failed to create Razorpay order' });
  }
});

// Save order after payment
router.post('/save-order', async (req, res) => {
  const { userId, products, amount, paymentId, orderId, status, address } = req.body;
  try {
    const order = new Order({ userId, products, amount, paymentId, orderId, status, address });
    await order.save();
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Get orders for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;