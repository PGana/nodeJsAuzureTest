

var express = require('express');
var app = express();

 

 app.get('/get', function(req, res) {
    res.status(400).send({status:'success', message:'NodeJS apis are working as expected -T1'});
 });


app.listen(3000, ()=>{
    console.log('Server is listening at 3000 port');
})