const router = require("express").Router();

let Children = require("../models/Children");

//create
router.route("/add").post((req, res)=>{
    const {initials, firstName, lastName, enrollmentNo, birthday, age, gender
    ,mainStreet, subStreet, apartment, city, stateNo, zip} = req.body;

    
    const newChild = new Children({
       initials, firstName, lastName, enrollmentNo, birthday,

        age, gender, mainStreet, subStreet, apartment, city, stateNo, zip

    });
    //created object passed to the database
    newChild.save().then(()=>{
        //success
        res.json("Child created successfully");
    }).catch(()=>{
        console.log(err);
    })
})

//display
router.route("/").get((req, res)=>{
    Children.find().then((Children)=>{
        res.json(Children)
    }).catch((err)=>{
        console.log(err);
    })
})


//updating
router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    //destructure
    const {initials, firstName, lastName, enrollmentNo, birthday, age, gender
        ,mainStreet, subStreet, apartment, city, stateNo, zip} = req.body;

    //object is created 
    const updateChildren  = { initials, firstName, lastName, enrollmentNo, birthday, age, gender
        ,mainStreet, subStreet, apartment, city, stateNo, zip
        
    }

    const update = await Children.findByIdAndUpdate(userId,updateChildren).then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err);
    })
    
})


//deleting
router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await Children.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"Error with deleting"})
    })
})

//getting only one user information
router.route("/get/:id").get(async (req, res) =>{
    let userId = req.params.id;
    const user =  await Children.findById(userId).then(()=>{
        res.status(200).send({status:"User fetched", user:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user"})
    })
})

module.exports = router;