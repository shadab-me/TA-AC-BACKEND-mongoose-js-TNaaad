let express =require('express')
let mongoose = require('mongoose');
 
let app = express();

mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb', (err) => {
        if(err){
            console.log(err)
         }else{
             console.log('connected')
         }
});



app.listen(3000, () => {
    console.log('server is running on port 3k')
});