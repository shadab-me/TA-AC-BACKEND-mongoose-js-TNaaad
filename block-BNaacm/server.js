const  express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
let {User, Article} = require('./models/user.js');
 


const app = express();
app.use(express.json());
app.use(morgan("combined"));



mongoose.connect('mongodb://127.0.0.1:27017/simple', { useNewUrlParser: true }, (err) => {
    if(err) console.log(err);

    console.log('connected')
})


app.get('/',  (req, res) => {
res.send('<h1> Welcome to This App</h1>')
});

app.post('/user', (req, res) => {
      User.create({name: req.body.name, email: req.body.email}, (err,) => {
         if(err) console.log(err);
         res.send('User Added Successfully');

      })
 });

 app.post('/article', (req, res) => {
     Article.create({
         title: req.body.title,
         content: req.body.content,
         author: req.body.author,
     }, (err) => {
       if(err) console.log(err);
        res.send('Article Is Publish Successfully')
     })
 })



app.listen(3000, () => {
    console.log('Ruining on Port 3000')
})
