let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let user = new Schema({

    name: String,
    email : {
     type: String,
     require: true,
     lowercase: true,
     
    },
    lastName: String,
    age : {
        value: 0
    }
});

