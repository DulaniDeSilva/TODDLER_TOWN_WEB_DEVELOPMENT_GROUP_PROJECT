const { json } = require("body-parser");
const Phone = require("../models/phoneModel");

const mongoose = require("mongoose");
// const twilioClient = twilio('AC60ef0579bdfa0623fc6816fc7bb05bcf','aadbd53b87e45cc80a75fd5c192d0a20',{apiVersion: '2010-04-01'  });
const dotenv = require('dotenv');
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// const generateRandomCode = () =>{
//     return Math.floor(100000 + Math.random()*900000).toString();
// };

// const sendVerificationCode = async(phoneNumber, vertificationCode)=>{
//     try{
//         await twilioClient.messages.create({
//             body: `Your Verification Code is: ${vertificationCode}`,
//             from: '+13344686133',
//             to:phoneNumber,
//         });
//     }catch(error){
//         console.error('Twilio Error:', error);
//         throw new Error('Error sending vertification code');
//     }
// };

// const phoneController = {
//     requestVerificationCode: async (req, res) => {
//       try {
//         const { phoneNumber } = req.body;
  
//         // Check if phone number exists in the database
//         const existingPhone = await Phone.findOne({ phoneNumber });
  
//         // Generate a new verification code
//         const verificationCode = generateRandomCode();
  
//         if (existingPhone) {
//           // Update existing phone record
//           existingPhone.vertificationCode = verificationCode;
//           existingPhone.isVertified = false;
//           await existingPhone.save();
//         } else {
//           // Create a new phone record
//           await Phone.create({
//             phoneNumber,
//             verificationCode,
//             isVerified: false,
//           });
//         }
  
//         // Send verification code via Twilio
//         await sendVerificationCode(phoneNumber, verificationCode);
  
//         res.status(200).json({ message: 'Verification code sent successfully' });
//       } catch (error) {
//         console.error('Request Verification Code Error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     },
  
//     verifyPhoneNumber: async (req, res) => {
//       try {
//         const { phoneNumber, verificationCode } = req.body;
  
//         // Check if phone number and verification code match
//         const phone = await Phone.findOne({ phoneNumber, verificationCode });
  
//         if (phone) {
//           // Update phone record as verified
//           phone.isVertified = true;
//           await phone.save();
//           res.status(200).json({ message: 'Phone number verified successfully' });
//         } else {
//           res.status(400).json({ error: 'Invalid verification code' });
//         }
//       } catch (error) {
//         console.error('Verify Phone Number Error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     },

  //   sendOTP: async (req, res) => {
  //     const { phoneNumber } = req.body;
  //     try {
  //         const otpResponse = await twilioClient.verify.services('AC60ef0579bdfa0623fc6816fc7bb05bcf').verifications.create({
  //             to: phoneNumber,
  //             channel: "sms",
  //         });
  //         res.status(200).send(`OTP sent successfully: ${JSON.stringify(otpResponse)}`);
  //     } catch (error) {
  //         res.status(error?.status || 400).send(error?.message || 'Something went wrong');
  //     }
  // },
  
  // verifyOTP: async (req, res) => {
  //     const { phoneNumber, otp } = req.body;
  //     try {
  //         const verifiedResponse = await twilioClient.verify.services('AC60ef0579bdfa0623fc6816fc7bb05bcf').verificationChecks.create({
  //             to: phoneNumber,
  //             code: otp,
  //         });
  //         res.status(200).send(`OTP verified successfully: ${JSON.stringify(verifiedResponse)}`);
  //     } catch (error) {
  //         res.status(error?.status || 400).send(error?.message || 'Something went wrong');
  //     }
  // }
  // };


  const sendVerificationCode = async (req, res) => {
    const { phoneNumber } = req.body;
  
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  
    try {
      // Save phone number and verification code to the database
      const phone = new Phone({
        phoneNumber,
        verificationCode
      });
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
  
      // Trim whitespace from the verification code
      const trimmedVerificationCode = verificationCode.trim();

      if (phone.verificationCode !== trimmedVerificationCode) {
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





  
  // module.exports = phoneController;