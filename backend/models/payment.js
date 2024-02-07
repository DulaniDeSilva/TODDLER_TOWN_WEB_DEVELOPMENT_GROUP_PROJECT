const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentType: {type:String, required:true},
    paymentName: {type:String, required:true},
    description: {type:String},
    amount: {type:Number, required:true},
    date: {type:Date, default:Date.now},
    user_id:{type:String, required:true},
}, {timestamps:true});


//creating model
const PaymentModel = mongoose.model("Payment",paymentSchema);

module.exports = PaymentModel;