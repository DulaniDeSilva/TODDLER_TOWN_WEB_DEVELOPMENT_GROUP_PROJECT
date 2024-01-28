//server.js 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000' // assuming your React frontend runs on port 3000
};
app.use(cors(corsOptions)); // Consider restricting CORS in production
app.use(express.json());

// Routes
const healthRecordsRoutes = require('./Routes/TeacherRoutes/healthRecords');
//const attendanceRoutes = require('./routes/AttendanceRoutes');
const lessonPlanRoutes = require('./Routes/TeacherRoutes/LessonPlanRoutes');

// Consistent route structure
app.use('/api/attendance', attendanceRoutes); 
app.use('/api/healthRecords', healthRecordsRoutes);
app.use('/api/lessonPlans', lessonPlanRoutes);

// Database connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB database connection established successfully'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Error handlig midleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send({ message: 'An internal server error occurred!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
