const express = require('express');

const {
    createInventory,
    getInventory,
    getSingleInventory,
    deleteInventory,
    updateInventory

} = require('../controllers/inventorycontroller');
const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();

//require auth for all inventory routes
router.use(requireAuth)

// let Inventory = require("../models/inventoryModel");

//getting all the inventory list
router.get("/", getInventory);

//get a single inventory
router.get("/:id", getSingleInventory);

//post a new inventory
router.post("/", createInventory);

//delete a inventory
router.delete("/:id",deleteInventory); 

//update a workout
router.patch("/:id",updateInventory);




module.exports = router;
