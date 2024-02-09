// models/SalaryDetails.js

const mongoose = require('mongoose');

const salaryDetailsSchema = new mongoose.Schema({
  month: String,
  basic: Number,
  bonus: Number,
  deductions: Number,
  netSalary: Number,
  paid: Boolean,
});

module.exports = mongoose.model('SalaryDetails', salaryDetailsSchema);
