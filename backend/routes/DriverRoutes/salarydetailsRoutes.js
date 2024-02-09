// routes/salaryDetailsRoutes.js
const express = require('express');
const router = express.Router();
const SalaryDetails = require('../../models/DriverModels/SalaryDetails');

// Create a new Salary Details entry
router.post('/', async (req, res) => {
  try {
    const newSalaryDetails = await SalaryDetails.create(req.body);
    res.status(201).json(newSalaryDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Salary Details entries
router.get('/', async (req, res) => {
  try {
    const salaryDetails = await SalaryDetails.find();
    res.json(salaryDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific Salary Details entry by ID
router.get('/:id', async (req, res) => {
  try {
    const salaryDetails = await SalaryDetails.findById(req.params.id);
    res.json(salaryDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific Salary Details entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSalaryDetails = await SalaryDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSalaryDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific Salary Details entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await SalaryDetails.findByIdAndDelete(req.params.id);
    res.json({ message: 'Salary Details entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

