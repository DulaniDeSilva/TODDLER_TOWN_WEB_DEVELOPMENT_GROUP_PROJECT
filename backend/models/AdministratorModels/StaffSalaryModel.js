const mongoose = require('mongoose');

const staffSalarySchema = new mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  bonus: Number,
  deduction: Number,
  isPaid: {
    type: Boolean,
    default: false,
  },
});

const StaffSalary = mongoose.model('StaffSalary', staffSalarySchema);

module.exports = StaffSalary;
