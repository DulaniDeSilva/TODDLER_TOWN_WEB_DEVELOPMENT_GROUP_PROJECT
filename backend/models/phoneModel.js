//importing mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    phoneNumber: {type:String, required:true},
    verificationCode:{type:String},
    isVerified:{type:Boolean, default:false}
    // user_id:{type:String, required:true},
});


//creating model
const Phone = mongoose.model("Phone",phoneSchema);

module.exports = Phone;