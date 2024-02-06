const express = require('express');

const {
    createWaitingList,
    // getWaitingList,
    // getSingleWaitingList,
    // deleteWaitingList,
    // updateWaitingList,

} = require('../controllers/waitingListcontroller');
// const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();

//require auth for all inventory routes
// router.use(requireAuth)

// let Inventory = require("../models/inventoryModel");

//getting all the inventory list
// router.get("/", getWaitingList);

//get a single inventory
// router.get("/:id", getSingleWaitingList);

//post a new inventory
router.post("/", createWaitingList);

//delete a inventory
// router.delete("/:id",deleteWaitingList); 

//update a workout
// router.patch("/:id",updateWaitingList);



module.exports = router;
