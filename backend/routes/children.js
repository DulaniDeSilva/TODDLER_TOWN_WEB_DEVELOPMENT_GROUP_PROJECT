const express =  require('express');

const {
    getChildren,
    getSingleChild,
    createChild,
    deleteChild,
    updateChild
} =  require('../controllers/childcontroller');

const requireAuth = require('../middlerware/requireAuth');

const router = express.Router();

//require auth for child routes
router.use(requireAuth);


// //get all the children list
// router.get('/', (req, res) => {
//     res.json({mssg: 'get all children'});
// });

//get all the children list
router.get('/', getChildren);

//get single child
router.get("/:id",getSingleChild);

//post a child
router.post("/", createChild);

//delte a child
router.delete('/:id', deleteChild);

//update a child
router.patch('/:id', updateChild);

module.exports = router;