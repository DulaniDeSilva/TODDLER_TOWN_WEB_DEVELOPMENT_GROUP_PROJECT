const mongoose = require('mongoose');

const academicStaffSchema = new mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
    unique: true,
  },
  emp_type: {
    type: String,
    default: 'academic',
  },
  name: {
    type: String,
    required: true,
  },
  dob: Date,
  address: String,
  gender: String,
  NIC: String,
  qualifications: String,
  year_joined: Number,
  salary: Number,
});

const AcademicStaff = mongoose.model('AcademicStaff', academicStaffSchema);

module.exports = AcademicStaff;
