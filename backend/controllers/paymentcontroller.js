const { json } = require("body-parser");
const Payment = require("../models/payment");
const mongoose = require("mongoose");

//get all payments
const getPayment = async(req, res)=>{
    const user_id = req.user._id;
    const payment = await Payment.find({user_id}).sort({createdAt:-1});

    res.status(200).json(payment);
}

//get single payment
const getSinglePayment = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Payment"});
    }
    const payment = await Payment.findById(id);

    if(!payment){
        return res.status(404).json({error: "No such Payment"})
    }
    res.status(200).json(payment);

}

//create a new payment
const createPayment = async (req, res)=>{
    const {paymentName, description, amount, date} = req.body;

    let emptyFields = [];
    if(!paymentName){
        emptyFields.push('paymentName');
    }
    if(!description){
        emptyFields.push('description');
    }
    if(!amount){
        emptyFields.push('amount');
    }
    if(!date){
        emptyFields.push('date');
    }
    if(emptyFields.length >0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }


    //adding to the db
    try{
        const user_id = req.user._id;
        const payment = await Payment.create({paymentName, description, amount, date, user_id});
        res.status(200).json(payment);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//delete a inventory
const deletePayment = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such payment"});
    }
    const payment = await Payment.findOneAndDelete({_id: id});
    if(!Payment){
        return res.status(404).json({error: "No such Payment"})
    }
    res.status(200).json(payment);


}

//update a inventory
const updatePayment = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such payment"});
    }

    const payment = await Payment.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!payment){
        return res.status(404).json({error: "No such Payment"})
    }
    res.status(200).json(payment);

}


module.exports = {
    getPayment,
    getSinglePayment,
    createPayment,
    deletePayment,
    updatePayment

}
