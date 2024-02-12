const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  attendanceList: [
    {
      emp_id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent',
      },
    },
  ],
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
