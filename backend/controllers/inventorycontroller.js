const { json } = require("body-parser");
const Inventory = require("../models/inventoryModel");
const mongoose = require("mongoose");

//get all inventoy
const getInventory = async(req, res)=>{
    const user_id = req.user._id;
    const inventoy = await Inventory.find({user_id}).sort({createdAt:-1});

    res.status(200).json(inventoy);
}

//get single inventory
const getSingleInventory = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such inventory"});
    }
    const inventory = await Inventory.findById(id);

    if(!inventory){
        return res.status(404).json({error: "No such item"})
    }
    res.status(200).json(inventory);

}

//create a new inventory
const createInventory = async (req, res)=>{
    const {itemName, description, quantity, date} = req.body;

    let emptyFields = [];
    if(!itemName){
        emptyFields.push('itemName');
    }
    if(!description){
        emptyFields.push('description');
    }
    if(!quantity){
        emptyFields.push('quantity');
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
        const inventory = await Inventory.create({itemName, description, quantity, date, user_id});
        res.status(200).json(inventory);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//delete a inventory
const deleteInventory = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such inventory"});
    }
    const inventory = await Inventory.findOneAndDelete({_id: id});
    if(!inventory){
        return res.status(404).json({error: "No such item"})
    }
    res.status(200).json(inventory);


}

//update a inventory
const updateInventory = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such inventory"});
    }

    const inventory = await Inventory.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!inventory){
        return res.status(404).json({error: "No such item"})
    }
    res.status(200).json(inventory);

}


module.exports = {
    getInventory,
    getSingleInventory,
    createInventory,
    deleteInventory,
    updateInventory

}
