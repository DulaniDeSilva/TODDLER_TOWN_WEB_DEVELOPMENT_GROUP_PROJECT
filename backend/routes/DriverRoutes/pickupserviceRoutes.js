// routes/pickupserviceRoutes.js
const express = require('express');
const router = express.Router();
const PickupService = require('../../models/DriverModels/PickupService');
const bodyParser = require('body-parser');

// Create a new Pickup Service entry
router.post('/', async (req, res) => {
  try {
    const newPickupService = await PickupService.create(req.body);
    res.status(201).json(newPickupService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Pickup Service entries
router.get('/', async (req, res) => {
  try {
    const pickupServices = await PickupService.find();
    res.json(pickupServices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific Pickup Service entry by ID
router.get('/:id', async (req, res) => {
  try {
    const pickupService = await PickupService.findById(req.params.id);
    res.json(pickupService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific Pickup Service entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPickupService = await PickupService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPickupService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific Pickup Service entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await PickupService.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pickup Service entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

