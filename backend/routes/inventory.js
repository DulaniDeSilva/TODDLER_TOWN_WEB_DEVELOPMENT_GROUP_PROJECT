const router = require("express").Router();

let Inventory = require("../models/Inventory");

//crating a item
router.route("/additem").post((req, res)=>{
    const {itemName, description, quantity, date} = req.body;

    
    const newItem = new Inventory({
      itemName, 
      description,
      quantity, 
      date,
    });
    //created object passed to the database
    newItem.save().then(()=>{
        //success
        res.json("Item Added Successfully");
    }).catch((err)=>{
        console.log(err);
    })
});
//finding item
router.route("/findItem").get((req, res)=>{
    Inventory.find().then((Inventory)=>{
        res.json(Inventory);
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/findItemByName").get((req, res)=>{
    const itemName = req.query.itemName;

    if(!itemName){
        return res.status(400).json({error: "Item Name is required"});
    }

    Inventory.findOne({itemName: itemName}).then((item)=>{
        if(item){
            res.json(item);
        }else{
            return res.status(404).json({error: "Item not found"});
        }
       
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    })
})

//updating
router.route("/update/:id").put(async(req, res)=>{
    let itemId = req.params.id;
    const {itemName, description, quantity, date} = req.body;

    const updateData = {itemName, description, quantity, date};

    try{
        const updateItem = await Inventory.findByIdAndUpdate(itemId, updateData, {new:true});

        if(updateItem){
            res.status(200).json({status: "Item updated", item:updateItem});  
        }else{
            res.status(404).json({error: "Item not found"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }

})

//delete an item
router.route("/delete/:id").delete(async(req, res) =>{
    let userId = req.params.id;

    await Inventory.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "Item deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"Error with deleting"})
    })
})









module.exports = router;
