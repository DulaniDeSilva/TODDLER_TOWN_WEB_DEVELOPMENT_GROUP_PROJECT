const router = require('express').Router();

const StaffAttendance = require('../../models/AdministratorModels/StaffAttendance');

// Route to add staff attendance
router.post('/add', async (req, res) => {
  try {
    const { emp_id, isPresent } = req.body;
    const date = new Date(); // Use current date for marking attendance
    const attendanceData = { staffId: emp_id, isPresent };
    const addedAttendance = await StaffAttendance.addStaffAttendance(date, [attendanceData]);
    res.json({ message: 'Staff attendance added!', attendance: addedAttendance });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add staff attendance.', details: err.message });
  }
});

// Route to get staff attendance by date
router.get('/', async (req, res) => {
  try {
    const date = new Date(); // Use current date for fetching attendance
    const attendance = await StaffAttendance.getStaffAttendanceByDate(date);
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get staff attendance.', details: err.message });
  }
});

module.exports = router;
