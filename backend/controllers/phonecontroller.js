//importing dependencies
const { json } = require("body-parser");
const Phone = require("../models/phoneModel");

const mongoose = require("mongoose");
// const twilioClient = twilio('AC60ef0579bdfa0623fc6816fc7bb05bcf','aadbd53b87e45cc80a75fd5c192d0a20',{apiVersion: '2010-04-01'  });
const dotenv = require('dotenv');
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


//send verification code
  const sendVerificationCode = async (req, res) => {
    const { phoneNumber } = req.body;
  
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  
    try {

      let phone = await Phone.findOne({phoneNumber});
      if(!phone){
        phone = new Phone({
          phoneNumber, 
          verificationCode,
          isVerified: false
        });
      }else{
        phone.verificationCode = verificationCode;
        phone.isVerified = false;
      }

      await phone.save();
  
      // Send verification code via Twilio
      await twilio.messages.create({
        body: `Your verification code is: ${verificationCode}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
      });
  
      res.status(200).json({ message: 'Verification code sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const verifyPhoneNumber = async (req, res) => {
    const { phoneNumber, verificationCode } = req.body;

    if(!phoneNumber || !verificationCode){
      return res.status(400).json({message: "Phone number or verification code is missing"})
    }
  
    try {
      // Find the phone number in the database
      const phone = await Phone.findOne({ phoneNumber });
  
      if (!phone) {
        return res.status(404).json({ message: 'Phone number not found' });
      }
  
      const trimmedVerificationCode = verificationCode.trim();
      // Trim whitespace from the verification code
      const trimmedStoredVerificationCode = phone.verificationCode.trim();

      if (trimmedStoredVerificationCode !== trimmedVerificationCode) {
        return res.status(400).json({ message: 'Invalid verification code' });
      }
      
  
      // Mark the phone number as verified
      phone.isVerified = true;
      await phone.save();
  
      res.status(200).json({ message: 'Phone number verified successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = { sendVerificationCode, verifyPhoneNumber };
