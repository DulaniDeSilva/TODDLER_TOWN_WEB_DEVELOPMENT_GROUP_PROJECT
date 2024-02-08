const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentCardSchema = new Schema({
    nameOnCard: {type:String, required:true},
    cardNumber: {type:String, required:true},
    expiration: {type:String},
    cvv: {type:Number, required:true},
    user_id:{type:String, required:true},
}, {timestamps:true});


//creating model
const PaymentCardModel = mongoose.model("PaymentCard",paymentCardSchema);

module.exports = PaymentCardModel;