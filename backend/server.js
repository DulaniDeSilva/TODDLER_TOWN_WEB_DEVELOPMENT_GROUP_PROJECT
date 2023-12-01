const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();

const passport = require('passport');
const session = require('express-session');
const cookieSession = require("cookie-session");
const config = require("./configs")
const passportSetup = require("./configs/google.auth.js");
// import { googleAuth } from "./configs/google.auth.js";




const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.use(
   cookieSession({
    name:"session",
    keys: ["toddlerTown"],
    maxAge: 24*60*60*100,
   })
)

app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:{
            secure:false,
            expires:new Date(Date.now() + 10000 ),
            maxAge:10000

        }

    })
)
app.use(passport.initialize());
app.use(passport.session());





const childrenRouter = require("./routes/children.js");
app.use("/children", childrenRouter);

//inventory
const inventoryRouter = require("./routes/inventory.js");
app.use("/inventory", inventoryRouter);
// /invntory/get

const parentRouter = require("./routes/parent.js");
app.use("/parentauth", parentRouter);

const authRouter = require("./routes/auth.js");
app.use("/auth", authRouter);






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





