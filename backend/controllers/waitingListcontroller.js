const { json } = require("body-parser");
const WaitingList = require("../models/WaitinglistModel");
const mongoose = require("mongoose");

//get all subscriptions
// const getWaitingList = async(req, res)=>{
//     const user_id = req.user._id;
//     const waitingList = await WaitingList.find({user_id}).sort({createdAt:-1});

//     res.status(200).json(waitingList);
// }

// internal or external user get all the messages
const getWaitingListAll = async (req, res)=>{
    try{
        const waitingList =  await WaitingList.find({}).sort({createdAt:-1});
        res.status(200).json(waitingList);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//create a new subscription
// const createWaitingList = async (req, res)=>{
//     const {fullName, email,description} = req.body;

//     let emptyFields = [];
//     if(!fullName){
//         emptyFields.push('fullName');
//     }
//     if(!description){
//         emptyFields.push('description');
//     }
//     if(!email){
//         emptyFields.push('email');
//     }
//     if(emptyFields.length >0){
//         return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
//     }

//     //adding to the db
//     try{
//         const user_id = req.user._id;
//         const waitingList = await WaitingList.create({fullName, email,description, user_id});
//         res.status(200).json(waitingList);
//     }catch(error){
//         res.status(400).json({error:error.message});
//     }
// }

const createWaitingList = async (req, res)=>{
    
    //adding to the db
    try{
        const {fullName, email, description} = req.body;
        const NewWaitingList = new WaitingList({fullName, email, description});
        await NewWaitingList.save();
        res.status(201).json({message: 'Form entry created successfully'});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

const updateWaitingList = async (req, res)=>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Invalid Subscription'});
        }
        const updatedWaitingList = await WaitingList.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new:true}
        );
        if(!updatedWaitingList){
            return res.status(404).json({error: 'No such subscription'});
        }
        res.status(200).json({message: 'Waiting list entry updated successfully', data:updatedWaitingList});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//deleting a entry
const deleteWaitingList = async (req, res)=>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'Invalid Subscription Id'});
        }
        const deleteWaitingList = await WaitingList.findOneAndDelete({_id:id});
        if(!deleteWaitingList){
            return res.status(404).json({error: 'No such subscription'});
        }
        res.status(200).json({message: 'Waiting list entry deleted successfully', data:deleteWaitingList});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}








module.exports = {
    // getWaitingList,
    // getSingleWaitingList,
    createWaitingList,
    getWaitingListAll,
    deleteWaitingList,
    updateWaitingList
    // deleteWaitingList,
    // updateWaitingList,

}
