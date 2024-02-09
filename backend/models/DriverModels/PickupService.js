// models/PickupService.js

const mongoose = require('mongoose');

const pickupServiceSchema = new mongoose.Schema({
  studentName: String,
  location: String,
  pickupTime: String,
  dropoffTime: String,
  verify: String,
});

module.exports = mongoose.model('PickupService', pickupServiceSchema);
