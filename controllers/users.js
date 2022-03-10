const mongoose = require('mongoose');
const User = require('../models/User');



// CREAR UN USUARIO 
const ruta =(req, res)=>{
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    user.save((err, usr)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
    });
}
/*
async function crearUsuario(body){
    let usuario = new User({
        name    :body.name,
        email   :body.email,
        password    :body.password
    });
    return await usuario.save();
}

/*
const findAllUsers = (req, res) => {
    User.find((err, users) =>{
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    });
}

const findById =(req, res) =>{
    User.findById(req.params.id, (err, user) =>{
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    });
}

const addUser = (req, res) =>{
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.save((err, usr)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
    });
}
*/
module.exports= {ruta};