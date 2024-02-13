const router = require('express').Router();
const Attendance = require('../../models/AdministratorModels/AttendanceModel');

// Add a new attendance entry for a given date
router.post('/add', async (req, res) => {
  try {
    const { date, attendanceList } = req.body;
    
    // Check if attendance for this date already exists
    const existingAttendance = await Attendance.findOne({ date });
    if (existingAttendance) {
      return res.status(400).json({ error: 'Attendance for this date already exists.' });
    }

    // Create a new attendance record
    const newAttendance = new Attendance({ date, attendanceList });
    const savedAttendance = await newAttendance.save();
    
    res.json({ message: 'Attendance added!', attendance: savedAttendance });
  } catch (err) {
    console.error('Failed to add attendance:', err);
    res.status(400).json({ error: 'Failed to add attendance.', details: err.message });
  }
});



// Fetch all attendance records
router.get('/', async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get attendance records.', details: err });
  }
});

// Fetch attendance record by date
router.get('/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const attendanceRecord = await Attendance.findOne({ date });
    if (!attendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found for the date.' });
    }
    res.json(attendanceRecord);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get attendance record.', details: err });
  }
});

// Update attendance record by date
router.put('/update/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const { attendanceList } = req.body;
    const updatedAttendance = await Attendance.findOneAndUpdate({ date }, { attendanceList }, { new: true });
    if (!updatedAttendance) {
      return res.status(404).json({ error: 'Attendance record not found for the date.' });
    }
    res.json({ message: 'Attendance record updated!', attendance: updatedAttendance });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update attendance record.', details: err });
  }
});

module.exports = router;
