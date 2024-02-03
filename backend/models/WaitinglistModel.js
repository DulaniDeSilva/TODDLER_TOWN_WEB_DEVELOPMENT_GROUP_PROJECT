const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const waitingListSchema = new Schema({
    fullName: {type:String, required:true},
    email: {type:String, required:true},
    description: {type:String},
    user_id:{type:String, required:true},
}, {timestamps:true});


//creating model
const WaitinglistModel = mongoose.model("WaitingList",waitingListSchema);

module.exports = WaitinglistModel;