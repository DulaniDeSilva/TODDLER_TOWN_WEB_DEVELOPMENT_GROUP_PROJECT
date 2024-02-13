const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const  validator = require('validator');

const userSchema = new Schema({
    userType:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

//static signup method: can call directly on the model
userSchema.statics.signup = async function(email, password,userType){

    //validation
    if(!email || !password ){
        throw Error('All fields must be  filled in');
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email already in use/ exists")
    }

    //salt 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password:hash,userType});

    return user;
}


//static login method
userSchema.statics.login = async function(email, password, userType){

    if(!email || !password){
        throw Error('All fields must be  filled in');
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error("Incorrect email")
    }
    
    if(userType !== user.userType){
        throw Error("Incorrect type");
    }


    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password');
    }
    

  
    return user;


}






module.exports = mongoose.model('User', userSchema);