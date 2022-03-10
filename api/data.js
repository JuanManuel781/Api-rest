const userControllers = require('../controllers/data');
const express = require('express');

const  router = express.Router();

router.get("/all", userControllers.prueba);

module.exports=router;