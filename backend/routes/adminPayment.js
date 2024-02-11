const express = require('express');

const {
    getAdminPayment
} = require('../controllers/adminpaymentcontroller');


const router = express.Router();


//getting all the inventory list
router.get("/", getAdminPayment);

module.exports = router;
