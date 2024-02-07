const mongoose = require('mongoose');
mongoose.models = {};
mongoose.modelSchemas = {};

const nonAcademicStaffSchema = new mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
    unique: true,
  },
  emp_type: {
    type: String,
    default: 'non-academic',
  },
  name: {
    type: String,
    required: true,
  },
  dob: Date,
  address: String,
  gender: String,
  NIC: String,
  year_joined: Number,
  salary: Number,
});

const NonAcademicStaff = mongoose.model('NonAcademicStaff', nonAcademicStaffSchema);

module.exports = NonAcademicStaff;
