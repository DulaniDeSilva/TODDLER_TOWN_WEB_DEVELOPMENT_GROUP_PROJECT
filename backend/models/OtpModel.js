const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const otpSchema = new Schema({
    userId: String,
    otp:String,
    createdAt: Date,
    expiresAt:Date,
});

const otp =  mongoose.model("OTP", otpSchema);

module.exports = otp;

