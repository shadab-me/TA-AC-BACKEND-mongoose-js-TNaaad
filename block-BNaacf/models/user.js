const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let user = new Schema({
   name: String,
   email: {
       type:String,
       require: true,
       lowercase: true,
   },
   age:{
       type: Number,
       default: 0,
  
    },
    marks: [5, 20, 6]
    
});

let address = new Schema({
    city: {type: String, require: true, uppercase: true},
    state: 'String',
    country: {type: 'String', uppercase: true},
    user: mongoose.Schema.Types.ObjectId
})