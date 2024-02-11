const Payment = require('../models/payment')
const mongoose = require('mongoose')

// get all workouts
const getAdminPayment = async (req, res) => {
  const payment = await Payment.find({}).sort({createdAt: -1})

  res.status(200).json(payment);
}


module.exports = {
    getAdminPayment
}