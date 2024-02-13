const express = require('express');

const {
    createWaitingList,
    getWaitingListAll,
    deleteWaitingList,
    updateWaitingList
    // getWaitingList,
    // getSingleWaitingList,
    // deleteWaitingList,
    // updateWaitingList,

} = require('../controllers/waitingListcontroller');
// const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();


//post a new inventory
router.post("/", createWaitingList);

router.get("/",getWaitingListAll);

router.delete("/:id", deleteWaitingList);

router.patch("/:id",updateWaitingList);


//delete a inventory
// router.delete("/:id",deleteWaitingList); 

//update a workout
// router.patch("/:id",updateWaitingList);



module.exports = router;
