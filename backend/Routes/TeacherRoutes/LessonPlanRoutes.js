// routes/LessonPlanRoutes.js

const router = require('express').Router();
const LessonPlan = require('../../Models/TeacherModels/LessonPlanModel');

// POST - Add a new lesson plan
router.post('/add', async (req, res) => {
  try {
    const newLessonPlan = new LessonPlan(req.body);
    const savedLessonPlan = await newLessonPlan.save();
    res.json({ message: 'Lesson plan added!', lessonPlan: savedLessonPlan });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add lesson plan.', details: err.message });
  }
});

// GET - Fetch all lesson plans
router.get('/', async (req, res) => {
  try {
    const lessonPlans = await LessonPlan.find();
    res.json(lessonPlans);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get lesson plans.', details: err });
  }
});

// GET - Fetch a lesson plan by month
router.get('/month/:month', async (req, res) => {
  try {
    const lessonPlan = await LessonPlan.findOne({ month: req.params.month });
    if (!lessonPlan) return res.status(404).json({ error: 'Lesson plan not found for the month.' });
    res.json(lessonPlan);
  } catch (err) {
    res.status(400).json({ error: 'Failed to get the lesson plan.', details: err });
  }
});

// PUT - Update lesson plan tracking by month
router.put('/update/:month', async (req, res) => {
  try {
    const lessonPlan = await LessonPlan.findOneAndUpdate({ month: req.params.month }, req.body, { new: true });
    if (!lessonPlan) return res.status(404).json({ error: 'Lesson plan not found for the month.' });
    res.json({ message: 'Lesson plan updated!', lessonPlan });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update lesson plan.', details: err });
  }
});

module.exports = router;
