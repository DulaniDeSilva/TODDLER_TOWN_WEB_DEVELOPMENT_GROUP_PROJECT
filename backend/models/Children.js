const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const childSchema = new Schema({
   name:{type:String, required: true, default: "Andrea Dolice Jane Eyre "},
   initials: {type:String, required:true, default: 'A.D'},
   firstName: {type:String, required:true, default: 'Jane'},
   lastName: {type:String, required:true, default: 'Eyre'},
   enrollmentNo: {type:String, required:true, default: 'T001'},
   birthday:{type:Date, required:true, default: Date.now},
   age: {type:Number, required:true,  min: 1, max: 16, default: 2},
   gender:{type:String, enum:['Male','Female']},
   address:{type:String, required:true, default:'Parakum Road, Kurunegala' },
   city:{type:String, required:true, default: 'Colombo'},
   zip:{type:String,required:true, default: '58889'},
   serviceType: {type:String, enum: ['Toddler Service', 'Pre-School Service', 'After School Service']},
   motherName:{type:String, required:true},
   motherAddress:{type:String, required:true},
   motherOccupation:{type:String, required:true},
   motherNicNo:{type:String, required:true},
   motherTelephoneNo: {type:String, required:true},
   motherWorkTelephoneNo:{type:String, required:true},
   motherEmail:{type:String, required:true},
   fatherName:{type:String, required:true},
   fatherAddress:{type:String, required:true},
   fatherOccupation:{type:String, required:true},
   fatherNicNo:{type:String, required:true},
   fatherTelephoneNo: {type:String, required:true},
   fatherWorkTelephoneNo:{type:String, required:true},
   fatherEmail:{type:String, required:true},
   guardianName:{type:String, required:true},
   guardianAddress:{type:String, required:true},
   guardianNicNo:{type:String, required:true},
   guardianTelephoneNo: {type:String, required:true},
   guardianEmail:{type:String, required:true},
   cardHolderName:{type:String, required:true},
   nameOnCard: {type:String, required:true},
   cardNumber:{type:String, required:true, match: /^\d{16}$/},
   expiration:{type:Date, required:true},
   cvv:{type:String, required:true,match: /^\d{3}$/},
   // documents: {type: [String], required:true},
   user_id:{type:String}
});


//creating model
const ChildModel = mongoose.model("Children",childSchema);

module.exports = ChildModel;