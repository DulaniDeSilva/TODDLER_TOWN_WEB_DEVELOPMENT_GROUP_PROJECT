// models/LessonPlanModel.js

const mongoose = require('mongoose');

const activityPlanSchema = new mongoose.Schema({
  month: String, 
  activities: [String], 
  trackingData: [
    {
      dateOfCompletion: Date,
      description: String,
      notes: String,
      suggestions: String
    }
  ]
});

const ActivityPlan = mongoose.model('ActivityPlan', activityPlanSchema);

module.exports = ActivityPlan;
