const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChildSchema = new Schema({
   name:{type:String},
   nested:{
    initials: {type:String, required:true, default: 'A.D'},
    firstName: {type:String, required:true, default: 'Jane'},
    lastName: {type:String, required:true, default: 'Eyre'},
   },
   enrollmentNo: {type:String, required:true, default: 'T001'},
   birthday:{type:Date, required:true, default: Date.now},
   age: {type:Number, required:true,  min: 1, max: 16, default: 2},
   gender:{type:String, enum:['male','female']},
   mainStreet:{type:String, required:true, default:'Parakum Road' },
   subStreet:{type:String,required:true, default: 'Baker street'},
   apartment:{type:String, required:true, default: 'Milenium'},
   city:{type:String, required:true, default: 'Colombo'},
   stateNo:{type:String, required:true, default: '21-A'},
   zip:{type:String,required:true, default: '58889'}
});


//creating model
const ChildModel = mongoose.model("Children",ChildSchema);

module.exports = ChildModel;