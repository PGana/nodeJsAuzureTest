

var express = require('express');
var app = express();



app.get('/get', function (req, res) {
    res.status(400).send({ status: 'success', message: 'NodeJS apis are working as expected -T2' });
});



/// THis line is so important (process.env.PORT) becase, cloud picks random port numbers.
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is listening at port : ' + port);
});