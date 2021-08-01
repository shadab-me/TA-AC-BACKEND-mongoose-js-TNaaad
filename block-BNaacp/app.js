const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./model/user.js');

mongoose.connect('mongodb://127.0.0.1:27017/crud', function(err) {
   if(err) console.log(err);
   console.log('connected');
});



const app = express();
app.use(morgan("combined"));
app.use(express.json());



// creating New User
app.post('/user', (req, res)  => {
  User.create({
        name: req.body.name,
        email: req.body.email,
        sports: [],
  }, (err) => {
      if(err) console.log(err);
      res.send('Added Successfully')
  });
});



// reading all User 
app.get('/users', async (req, res) => {
   //console.log(User.find());
   //res.send(User.find())
let users = await User.find()
res.send(users)
});

app.get('/user/:id', (req, res) => {
    let id =   req.params.id;
   User.findOne({_id: id }, function(err, user){ 
   if(err) console.log(err);
    res.send(user);
   });
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete({_id: id}, (err, user) => {
        if(err) console.log(err);
        else{
            res.send(user)
        }
    });
 });

app.put('/user/:id', (req, res) => {
     let id = req.params.id;
        let newData = {
          name:req.body.name,
          email:req.body.email
        }

         User.findByIdAndUpdate({_id: id}, newData, {new: true}, (err, user) => {
         if(err) console.log(err);
         else{
             res.send(user);
         }
     });
    
})


app.listen(3000, () => {
    console.log('Server is running on port 3k')
})