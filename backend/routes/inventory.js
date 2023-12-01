const router = require("express").Router();

const {
    createInventory,
    getInventory,
    getSingleInventory,
    deleteInventory,
    updateInventory

} = require('../controllers/inventorycontroller')

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
