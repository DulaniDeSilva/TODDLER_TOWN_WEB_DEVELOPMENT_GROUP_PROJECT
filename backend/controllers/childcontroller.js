const { json } = require("body-parser");
const Children = require("../models/Children");
const mongoose = require("mongoose");

//get all children
const getChildren = async(req, res)=>{
    const user_id = req.user._id;
    const child = await Children.find({user_id}).sort({createdAt:-1});

    res.status(200).json(child);
}

//get single child
const getSingleChild = async(req, res)=>{
    //getting the id
    const {id} = req.params;

    //checking if the id valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Child enrolled"});
    }
    const child = await Children.findById(id);

    if(!child){
        return res.status(404).json({error: "No such Child"})
    }
    res.status(200).json(child);

}

//create a new child
const createChild = async (req, res)=>{
    const {  name,
        initials,
        firstName,
        lastName,
        enrollmentNo,
        birthday,
        age,
        gender,
        address,
        city,
        zip,
        serviceType,
        motherName,
        motherAddress,
        motherOccupation,
        motherNicNo,
        motherTelephoneNo,
        motherWorkTelephoneNo,
        motherEmail,
        fatherName,
        fatherAddress,
        fatherOccupation,
        fatherNicNo,
        fatherTelephoneNo,
        fatherWorkTelephoneNo,
        guardianName,
        guardianAddress,
        guardianNicNo,
        guardianTelephoneNo,
        guardianEmail,
        cardHolderName,
        nameOnCard,
        cardNumber,
        expiration,
        cvv
    } = req.body;

    let emptyFields = [];
    if (!name || !initials || !firstName || !lastName || !enrollmentNo || !birthday || !age || !gender  
        || !address || !city || !zip || !serviceType || !motherName || !motherAddress || !motherOccupation ||
        !motherNicNo || !motherTelephoneNo || !motherWorkTelephoneNo || !motherEmail || !fatherName || !fatherAddress
        || !fatherOccupation || !fatherNicNo || !fatherTelephoneNo || !fatherWorkTelephoneNo || !guardianName ||
        !guardianAddress || !guardianNicNo || !guardianTelephoneNo || !guardianEmail || !cardHolderName || !nameOnCard ||
        !cardNumber || !expiration || !cvv
         ) {
        emptyFields.push('One or more required fields are missing');
    }
   

    if(emptyFields.length >0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }


    //adding to the db
    try{
        const user_id = req.user._id;
        const child = await Children.create({ name,
            initials,
            firstName,
            lastName,
            enrollmentNo,
            birthday,
            age,
            gender,
            address,
            city,
            zip,
            serviceType,
            motherName,
            motherAddress,
            motherOccupation,
            motherNicNo,
            motherTelephoneNo,
            motherWorkTelephoneNo,
            motherEmail,
            fatherName,
            fatherAddress,
            fatherOccupation,
            fatherNicNo,
            fatherTelephoneNo,
            fatherWorkTelephoneNo,
            guardianName,
            guardianAddress,
            guardianNicNo,
            guardianTelephoneNo,
            guardianEmail,
            cardHolderName,
            nameOnCard,
            cardNumber,
            expiration,
            cvv,
            user_id});
        res.status(200).json(child);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//delete a inventory
const deleteChild = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Child"});
    }
    const Child = await Children.findOneAndDelete({_id: id});
    if(!Child){
        return res.status(404).json({error: "No such Child"})
    }
    res.status(200).json(Child);
}

//update a child
const updateChild = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Child "});
    }

    try {
        const child = await Children.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                initials: req.body.initials,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                enrollmentNo: req.body.enrollmentNo,
                birthday: req.body.birthday,
                age: req.body.age,
                gender: req.body.gender,
                address: req.body.address,
                city: req.body.city,
                zip: req.body.zip,
                serviceType: req.body.serviceType,
                motherName: req.body.motherName,
                motherAddress: req.body.motherAddress,
                motherOccupation: req.body.motherOccupation,
                motherNicNo: req.body.motherNicNo,
                motherTelephoneNo: req.body.motherTelephoneNo,
                motherWorkTelephoneNo: req.body.motherWorkTelephoneNo,
                motherEmail: req.body.motherEmail,
                fatherName: req.body.fatherName,
                fatherAddress: req.body.fatherAddress,
                fatherOccupation: req.body.fatherOccupation,
                fatherNicNo: req.body.fatherNicNo,
                fatherTelephoneNo: req.body.fatherTelephoneNo,
                fatherWorkTelephoneNo: req.body.fatherWorkTelephoneNo,
                guardianName:req.body.guardianName,
                guardianAddress:req.body.guardianAddress,
                guardianNicNo:req.body.guardianNicNo,
                guardianTelephoneNo: req.body.guardianTelephoneNo,
                guardianEmail: req.body.guardianEmail,
                cardHolderName:req.body.cardHolderName,
                nameOnCard: req.body.nameOnCard,
                cardNumber: req.body.cardNumber,
                expiration: req.body.expiration,
                cvv: req.body.cvv
            },
            { new: true }
        );

        if (!child) {
            return res.status(404).json({ error: "No such child" });
        }

        res.status(200).json(child);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};


module.exports = {
    getChildren,
    getSingleChild,
    createChild,
    deleteChild,
    updateChild

}