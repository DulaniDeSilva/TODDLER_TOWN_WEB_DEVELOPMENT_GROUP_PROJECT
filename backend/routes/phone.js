//importing the dependencies
const express = require('express');

const phoneController = require('../controllers/phonecontroller');



const router = express.Router();

// phoneRouter.post('/request-verification-code', phoneController.requestVerificationCode);
// phoneRouter.post('/verify-phone-number', phoneController.verifyPhoneNumber);


// phoneRouter.post('/request-verification-code', phoneController.sendOTP);
// phoneRouter.post('/verify-phone-number', phoneController.verifyOTP);


//Defining the routers
router.post('/send-code', phoneController.sendVerificationCode);
router.post('/verify', phoneController.verifyPhoneNumber);

module.exports = router;




// module.exports = phoneRouter;
