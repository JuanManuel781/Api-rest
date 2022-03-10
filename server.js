const express = require('express');
const bodyparser= require('body-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('./api/users');
const Data = require('./api/data');
const morgan = require('morgan');
const { status } = require('express/lib/response');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use("/api/users", Users);
app.use("/api/data", Data);

/*mongoose.connect(
    "mongodb://localhost/usuarios",
    {useNewUrlParser: true},
    (err, res)=>{
        err && console.log('Error conectando a la bd');
        app.listen(4000, () =>{
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)
*/
app.listen(4000, () =>{
    console.log('Servidor corriendo en http://localhost:4000');
});