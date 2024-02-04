const router = require('express').Router();

const {signup, getBill} = require('../controllers/otpcontroller.js');



// router.post("/", createOtp);

router.post('/user/signup', signup);
router.post('/product/getBill', getBill);

module.exports = router;