let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user = new Schema({
    name: String,
    lastName: String,
    age : Number
});

