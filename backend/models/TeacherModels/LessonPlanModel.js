// models/LessonPlanModel.js

const mongoose = require('mongoose');

const lessonPlanSchema = new mongoose.Schema({
  month: String, 
  lessons: [String], 
  trackingData: [
    {
      dateOfCompletion: Date,
      description: String,
      notes: String,
      suggestions: String
    }
  ]
});

const LessonPlan = mongoose.model('LessonPlan', lessonPlanSchema);

module.exports = LessonPlan;
