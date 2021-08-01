const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const users = new Schema({
    email: {
        type: 'String',
        require: 'true',
        lowercase: 'true'
    },
    password:{
        require: true,
        minlength: 5,
        maxlength: 15,
    },
    createdAt: {
        date: new Date()
    }
    
}) 