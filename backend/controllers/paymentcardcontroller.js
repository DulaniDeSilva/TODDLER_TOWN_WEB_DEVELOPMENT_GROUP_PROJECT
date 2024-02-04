const { json } = require("body-parser");
const PaymentCard = require("../models/paymentCard");
const mongoose = require("mongoose");

//get all payments
const getPaymentCard = async(req, res)=>{
    const user_id = req.user._id;
    const paymentCard = await PaymentCard.find({user_id}).sort({createdAt:-1});

    res.status(200).json(paymentCard);
}

//get single payment
const getSinglePaymentCard = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Card"});
    }
    const paymentCard = await PaymentCard.findById(id);

    if(!paymentCard){
        return res.status(404).json({error: "No such Card"})
    }
    res.status(200).json(paymentCard);

}

//create a new payment
const createPaymentCard = async (req, res)=>{
    const {nameOnCard, cardNumber, expiration, cvv} = req.body;

    let emptyFields = [];
    if(!nameOnCard){
        emptyFields.push('nameOnCard');
    }
    if(!cardNumber){
        emptyFields.push('cardNumber');
    }
    if(!expiration){
        emptyFields.push('expiration');
    }
    if(!cvv){
        emptyFields.push('cvv');
    }
    if(emptyFields.length >0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }


    //adding to the db
    try{
        const user_id = req.user._id;
        const paymentCard = await PaymentCard.create({nameOnCard,cardNumber, expiration, cvv, user_id});
        res.status(200).json(paymentCard);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//delete a inventory
const deletePaymentCard = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such card"});
    }
    const paymentCard = await PaymentCard.findOneAndDelete({_id: id});
    if(!paymentCard){
        return res.status(404).json({error: "No such card"})
    }
    res.status(200).json(paymentCard);


}

//update a inventory
const updatePaymentCard = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such card"});
    }

    const paymentCard = await PaymentCard.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!paymentCard){
        return res.status(404).json({error: "No such card"})
    }
    res.status(200).json(paymentCard);

}


module.exports = {
    getPaymentCard,
    getSinglePaymentCard,
    createPaymentCard,
    deletePaymentCard,
    updatePaymentCard

}
