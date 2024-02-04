const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();

const passport = require('passport');
const session = require('express-session');
const cookieSession = require("cookie-session");






const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;








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

const otpRouter = require("./routes/otp.js");
app.use("/otp", otpRouter);







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





