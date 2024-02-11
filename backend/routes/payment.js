const express = require('express');

const {
    createPayment,
    getPayment,
    getSinglePayment,
    deletePayment,
    updatePayment
    
} = require('../controllers/paymentcontroller');
const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();

//require auth for all payment routes
router.use(requireAuth)

//getting all the payment list
router.get("/", getPayment);

//get a single payment
router.get("/:id", getSinglePayment);


//post a new inventory
router.post("/", createPayment);

//delete a inventory
router.delete("/:id",deletePayment); 

//update a workout
router.patch("/:id",updatePayment);



module.exports = router;
