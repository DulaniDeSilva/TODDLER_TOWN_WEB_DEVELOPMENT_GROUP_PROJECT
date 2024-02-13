

const router = require('express').Router();
const ActivityPlan = require('../../models/CareGiverModels/ActivityPlanModel');

// Add a new lesson plan
router.post('/add', async (req, res) => {
  try {
    const newActivityPlan = new ActivityPlan(req.body);
    const savedActivityPlan = await newActivityPlan.save();
    res.json({ message: 'Activity plan added!', activityPlan: savedActivityPlan });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add activity plan.', details: err.message });
  }
});

// Fetch all lesson plans
router.get('/', async (req, res) => {
  try {
    const activityPlans = await ActivityPlan.find();
    res.json(activityPlans);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get activity plans.', details: err });
  }
});

// Fetch a activity plan by month
router.get('/month/:month', async (req, res) => {
  try {
    const activityPlan = await ActivityPlan.findOne({ month: req.params.month });
    if (!activityPlan) return res.status(404).json({ error: 'Activity plan not found for the month.' });
    res.json(activityPlan);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get the Activity plan.', details: err });
  }
});

// Update Activity plan tracking by month
router.put('/update/:month', async (req, res) => {
  try {
    const activityPlan = await ActivityPlan.findOneAndUpdate({ month: req.params.month }, req.body, { new: true });
    if (!activityPlan) return res.status(404).json({ error: 'Activity plan not found for the month.' });
    res.json({ message: 'Activity plan updated!', activityPlan });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update Activity plan.', details: err });
  }
});

module.exports = router;
