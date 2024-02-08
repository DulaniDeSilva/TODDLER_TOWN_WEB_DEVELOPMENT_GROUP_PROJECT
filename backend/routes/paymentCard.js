const express = require('express');

const {
    createPaymentCard,
    getPaymentCard,
    getSinglePaymentCard,
    deletePaymentCard,
    updatePaymentCard

} = require('../controllers/paymentcardcontroller');
const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();

//require auth for all payment routes
router.use(requireAuth)

//getting all the payment list
router.get("/", getPaymentCard);

//get a single payment
router.get("/:id", getSinglePaymentCard);

//post a new inventory
router.post("/", createPaymentCard);

//delete a inventory
router.delete("/:id",deletePaymentCard); 

//update a workout
router.patch("/:id",updatePaymentCard);



module.exports = router;
