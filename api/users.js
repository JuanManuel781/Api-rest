const userControllers = require('../controllers/users');
const express = require('express');

const  router = express.Router();

router.get("/all", userControllers.findAllUsers);
router.get("/:id", userControllers.findById);
router.post('/add', userControllers.addUser);
router.post('/', userControllers.ruta);



module.exports=router;