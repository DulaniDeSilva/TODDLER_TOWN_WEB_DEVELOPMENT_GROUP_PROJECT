const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();
// const twilio = require('twilio');

const passport = require('passport');
const session = require('express-session');
const cookieSession = require("cookie-session");






const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// ######################################################
// Middleware
// const corsOptions = {
//     origin: 'http://localhost:3000' // assuming your React frontend runs on port 3000
// };
// app.use(cors(corsOptions)); // Consider restricting CORS in production
// app.use(express.json());y



//NILMI'S ROUTES
const healthRecordsRoutes = require('./routes/TeacherRoutes/healthRecords');
//const attendanceRoutes = require('./routes/AttendanceRoutes');
const lessonPlanRoutes = require('./routes/TeacherRoutes/LessonPlanRoutes');
const activityPlanRoutes = require('./routes/CaregiverRoutes/ActivityPlanRoutes');
const staffRoutes = require('./routes/AdministratorRoutes/StaffRoutes');
const childrenRoutes = require('./routes/AdministratorRoutes/childrenRoutes');
const attendanceRoutes = require('./routes/AdministratorRoutes/attendanceRoutes'); // Import the AttendanceRoutes
const staffSalaryRoutes = require('./routes/AdministratorRoutes/staffSalaryRoutes.js');




//app.use('/api/attendance', attendanceRoutes); 
app.use('/api/healthRecords', healthRecordsRoutes);
app.use('/api/lessonPlans', lessonPlanRoutes);
app.use('/api/activityPlans', activityPlanRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/childrens', childrenRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/staffSalary', staffSalaryRoutes);



// // Database connection
// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB database connection established successfully'))
// .catch(err => console.error('Failed to connect to MongoDB:', err));

// Error handlig midleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send({ message: 'An internal server error occurred!' });
});





// ##################################################
// ############## Chalani Routes
// const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");
const postRoute = require('./routes/BlogRoutes/posts');
const categoryRoute = require('./routes/BlogRoutes/categories');

app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const pickupserviceRoutes = require('./routes/DriverRoutes/pickupserviceRoutes');
const salaryDetailsRoutes = require('./routes/DriverRoutes/salarydetailsRoutes');
// Routes
app.use('/api/pickupservice', pickupserviceRoutes);
app.use('/api/salarydetails', salaryDetailsRoutes);










// ################################################

const childrenRouter = require("./routes/children.js");
app.use("/children", childrenRouter);

//inventory
const inventoryRouter = require("./routes/inventory.js");
app.use("/inventory", inventoryRouter);
// /invntory/get

//signup login
const userRouter = require("./routes/user.js");
app.use("/user", userRouter);

//payment
const paymentRouter = require("./routes/payment.js");
app.use("/payment", paymentRouter);

//waitinglist
const waitinglistRouter = require("./routes/waitingList.js");
app.use("/waitingList", waitinglistRouter);

//payment card infromation
const paymentCardRouter = require("./routes/paymentCard.js");
app.use("/paymentCard", paymentCardRouter);

// const otpRouter = require("./routes/otp.js");
// app.use("/otp", otpRouter);


const phoneRouter = require('./routes/phone');
app.use("/phone", phoneRouter);

const adminPaymentRouter =  require('./routes/adminPayment');
app.use("/adminPayment", adminPaymentRouter);


app.get("/", (req, res, next)=>{
    res.send("Starting...");
    next();
})



// const URL = process.env.MONGODB_URL;
// mongoose.connect(URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
// const connection = mongoose.connection;
// connection.once('open', () =>{
//     console.log("Mogodb connection suceesfully established");
// })



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(PORT, () => {
        console.log("Server Started listening at port", PORT); 
        console.log("Successfully connected to mongodb");
    });
})
.catch((error)=>{
    console.log(error);
});


// const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken);




