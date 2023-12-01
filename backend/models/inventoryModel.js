const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    itemName: {type:String, required:true},
    description: {type:String},
    quantity: {type:Number, required:true},
    date: {type:Date, default:Date.now},
}, {timestamps:true});


//creating model
const InventoryModel = mongoose.model("Inventory",inventorySchema);

module.exports = InventoryModel;