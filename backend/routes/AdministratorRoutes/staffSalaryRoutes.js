const router = require('express').Router();
const StaffSalary = require('../../models/AdministratorModels/StaffSalaryModel');

// POST - Add a new staff salary entry
router.post('/add', async (req, res) => {
  try {
    const newStaffSalary = new StaffSalary(req.body);
    const savedStaffSalary = await newStaffSalary.save();
    res.json({ message: 'Staff salary added!', staffSalary: savedStaffSalary });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add staff salary.', details: err.message });
  }
});

// GET - Fetch all staff salaries
router.get('/', async (req, res) => {
  try {
    const staffSalaries = await StaffSalary.find();
    res.json(staffSalaries);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get staff salaries.', details: err });
  }
});

// GET - Fetch a staff salary by emp_id
router.get('/id/:emp_id', async (req, res) => {
  try {
    const staffSalary = await StaffSalary.findOne({ emp_id: req.params.emp_id });
    if (!staffSalary) return res.status(404).json({ error: 'Staff salary not found.' });
    res.json(staffSalary);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get the staff salary.', details: err });
  }
});

// PUT - Update staff salary by emp_id
router.put('/update/:emp_id', async (req, res) => {
  try {
    const staffSalary = await StaffSalary.findOneAndUpdate({ emp_id: req.params.emp_id }, req.body, { new: true });
    if (!staffSalary) return res.status(404).json({ error: 'Staff salary not found.' });
    res.json({ message: 'Staff salary updated!', staffSalary });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update staff salary.', details: err });
  }
});

module.exports = router;
