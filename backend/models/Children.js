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
   adress:{type:String, required:true, default:'Parakum Road, Kurunegala' },
   city:{type:String, required:true, default: 'Colombo'},
   zip:{type:String,required:true, default: '58889'},
   serviceTYpe: {type:String, enum: ['Toddler Service', 'Pre-School Service', 'After School Service']},
   mother:{
      name:{type:String, required:true},
      address:{type:String, required:true},
      occupation:{type:String, required:true},
      nicNo:{type:String, required:true},
      telephoneNo: {type:String, required:true,match: /^\d{3}-\d{7}$/},
      workTelephoneNo:{type:String, required:true,match: /^\d{3}-\d{7}$/},
      email:{type:String, required:true}
   },
   father:{
      name:{type:String, required:true},
      address:{type:String, required:true},
      occupation:{type:String, required:true},
      nicNo:{type:String, required:true},
      telephoneNo: {type:String, required:true,match: /^\d{3}-\d{7}$/},
      workTelephoneNo:{type:String, required:true,match: /^\d{3}-\d{7}$/},
      email:{type:String, required:true}
   },
   guardian:{
      name:{type:String, required:true},
      address:{type:String, required:true},
      nicNo:{type:String, required:true},
      telephoneNo: {type:String, required:true,match: /^\d{3}-\d{7}$/},
      email:{type:String, required:true}
   },
   bankInformation:{
      cardHolderName:{type:String, required:true},
      nameOnCard: {type:String, required:true},
      cardNumber:{type:String, required:true, match: /^\d{16}$/},
      expiration:{type:Date, required:true},
      cvv:{type:String, required:true,match: /^\d{3}$/}
   },
   documents: {type: [String], required:true},
   user_id:{type:String, required:true}
});


//creating model
const ChildModel = mongoose.model("Children",childSchema);

module.exports = ChildModel;