const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = mongoose.model('User', new Schema({
    name: {
        type: 'String',
        require: true
    },
    email: String
}));


let Article = mongoose.model('Article',new Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    author: mongoose.Schema.Types.ObjectId,
    tags: []
}));

module.exports = {User, Article};
 