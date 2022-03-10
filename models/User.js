const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String,
        required: false
    }
});
module.exports = User = mongoose.model('User', UserSchema);
