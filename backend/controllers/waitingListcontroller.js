const { json } = require("body-parser");
const WaitingList = require("../models/WaitinglistModel");
const mongoose = require("mongoose");

//get all subscriptions
const getWaitingList = async(req, res)=>{
    const user_id = req.user._id;
    const waitingList = await WaitingList.find({user_id}).sort({createdAt:-1});

    res.status(200).json(waitingList);
}

//get single inventory
const getSingleWaitingList = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such subscription"});
    }
    const waitingList = await WaitingList.findById(id);

    if(!WaitingList){
        return res.status(404).json({error: "No such subscription"});
    }
    res.status(200).json(waitingList);

}

//create a new subscription
const createWaitingList = async (req, res)=>{
    const {fullName, email,description} = req.body;

    let emptyFields = [];
    if(!fullName){
        emptyFields.push('fullName');
    }
    if(!description){
        emptyFields.push('description');
    }
    if(!email){
        emptyFields.push('email');
    }
    if(emptyFields.length >0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }


    //adding to the db
    try{
        const user_id = req.user._id;
        const waitingList = await WaitingList.create({fullName, email,description, user_id});
        res.status(200).json(waitingList);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//delete a subscription
const deleteWaitingList = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such subscription"});
    }
    const waitingList = await WaitingList.findOneAndDelete({_id: id});
    if(!waitingList){
        return res.status(404).json({error: "No such subscription"});
    }
    res.status(200).json(waitingList);


}

//update a subscription
const updateWaitingList = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such waitingList"});
    }

    const waitingList = await WaitingList.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!waitingList){
        return res.status(404).json({error: "No such subscription"})
    }
    res.status(200).json(waitingList);

}


module.exports = {
    getWaitingList,
    getSingleWaitingList,
    createWaitingList,
    deleteWaitingList,
    updateWaitingList,

}
