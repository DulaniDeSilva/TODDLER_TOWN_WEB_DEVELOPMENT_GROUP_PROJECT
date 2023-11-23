const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
})

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mogodb connection suceesfully established");
})



const childrenRouter = require("./routes/children.js");
app.use("/children", childrenRouter);

const inventoryRouter = require("./routes/inventory.js");
app.use("/inventory", inventoryRouter);


app.listen(PORT, () => {
    console.log("Server Started listening at port", PORT)
});