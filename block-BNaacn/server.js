const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
app.use(morgan("combined"));
mongoose.connect('mongodb://127.0.0.1:27017/simple', function(err){
    if(err) console.log(err);

    console.log('Connected');
})


app.listen(3000, () => console.log('Server is running on port number 3k'))