const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article  = mongoose.model('Article', new Schema({
    
    title:String,
    description:String,
    tags: String,
    createdAt : new Date(),
    likes : Number

}));



let User = mongoose.model('User', new Schema({
    name:String, 
    email:{
        type: String,
        minlength: 5,
        lowercase: true
         
    },
    age: {
        type: Number,
        default: 0
    },
    favorite: [],
    createdAt: new Date()
}));

 
const Address = mongoose.model('ADDRESS', new Schema({
village: String,
city:{
    type: String,
    require: true
},
state:{
    type: String,
    require: true
},

pin: Number,
user: mongoose.Types.ObjectId,
 
},{timestamps: true}));

module.exports = {Article, User, Address}






