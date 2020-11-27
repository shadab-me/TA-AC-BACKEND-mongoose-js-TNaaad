mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb', (err) => {
        if(err){
            console.log(err)
         }else{
             console.log('connected')
         }
});