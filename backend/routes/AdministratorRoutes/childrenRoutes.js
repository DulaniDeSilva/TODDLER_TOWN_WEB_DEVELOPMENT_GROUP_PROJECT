// routes/ChildRoutes.js

const router = require('express').Router();
const Child = require('../../models/Children');

// POST - Add a new child
router.post('/add', async (req, res) => {
  try {
    const newChild = new Child(req.body);
    const savedChild = await newChild.save();
    res.json({ message: 'Child added!', child: savedChild });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add child.', details: err.message });
  }
});

// GET - Fetch all children
router.get('/', async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get children.', details: err });
  }
});

// GET - Fetch a child by enrollment number
router.get('/enrollment/:enrollmentNo', async (req, res) => {
  try {
    const child = await Child.findOne({ enrollmentNo: req.params.enrollmentNo });
    if (!child) return res.status(404).json({ error: 'Child not found.' });
    res.json(child);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get the child.', details: err });
  }
});

// PUT - Update child by enrollment number
router.put('/update/:enrollmentNo', async (req, res) => {
  try {
    const child = await Child.findOneAndUpdate({ enrollmentNo: req.params.enrollmentNo }, req.body, { new: true });
    if (!child) return res.status(404).json({ error: 'Child not found.' });
    res.json({ message: 'Child updated!', child });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update child.', details: err });
  }
});

// DELETE - Delete child by enrollment number
router.delete('/delete/:enrollmentNo', async (req, res) => {
  try {
    const deletedChild = await Child.findOneAndDelete({ enrollmentNo: req.params.enrollmentNo });
    if (!deletedChild) return res.status(404).json({ error: 'Child not found.' });
    res.json({ message: 'Child deleted!', child: deletedChild });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete child.', details: err });
  }
});

module.exports = router;
