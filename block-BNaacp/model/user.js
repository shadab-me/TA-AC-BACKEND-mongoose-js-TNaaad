const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
    name: {
        type:String,
        require: true,
    },
    email:{
        type: String,
        lowercase: true
    },
    sports: []
}))

module.exports = User

