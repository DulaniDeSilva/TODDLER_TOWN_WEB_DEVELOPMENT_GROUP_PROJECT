const express = require('express');
const router = express.Router();
const AcademicStaff = require('../../models/AdministratorModels/AcademicStaffModel');
const NonAcademicStaff = require('../../models/AdministratorModels/NonAcademicStaffModel');

// Route to add academic staff
router.post('/academic/add', async (req, res) => {
  try {
    const newAcademicStaff = new AcademicStaff(req.body);
    const savedAcademicStaff = await newAcademicStaff.save();
    res.json({ message: 'Academic staff added!', staff: savedAcademicStaff });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add academic staff.', details: err.message });
  }
});


// Route to add non-academic staff
router.post('/nonAcademic/add', async (req, res) => {
  try {
    const newNonAcademicStaff = new NonAcademicStaff(req.body);
    const savedNonAcademicStaff = await newNonAcademicStaff.save();
    res.json({ message: 'Non-academic staff added!', staff: savedNonAcademicStaff });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add non-academic staff.', details: err.message });
  }
});

// Route to get all academic staff
router.get('/academic', async (req, res) => {
  try {
    const academicStaff = await AcademicStaff.find();
    res.json(academicStaff);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get academic staff.', details: err });
  }
});

// Route to get all non-academic staff
router.get('/nonAcademic', async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.find();
    res.json(nonAcademicStaff);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get non-academic staff.', details: err });
  }
});

// Route to delete academic staff by ID
router.delete('/academic/:emp_id', async (req, res) => {
  try {
    const deletedAcademicStaff = await AcademicStaff.findByIdAndDelete(req.params.emp_id);
    if (!deletedAcademicStaff) {
      return res.status(404).json({ error: 'Academic staff not found.' });
    }
    res.json({ message: 'Academic staff deleted!', staff: deletedAcademicStaff });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete academic staff.', details: err });
  }
});



// Other routes for updating and deleting staff records can be added similarly
module.exports = router;