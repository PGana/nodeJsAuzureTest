

var express = require('express');
var app = express();



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/get', function (req, res) {
    res.status(400).send({ status: 'success', message: 'NodeJS apis are working as expected -T2' });
});

app.get('/getCources', (req, res) => {
    var course = [
        {
            "id": 10001,
            "name": "Artificial Intelligence (AI)",
            "duration": 48,
            "cost": 300,
            "tutor": "MR. Josan",
            "startDate": "2020/06/07"
        },
        {
            "id": 10002,
            "name": "Machine Learning (ML)",
            "duration": 20,
            "cost": 700,
            "tutor": "MR. K R Ragav",
            "startDate": "2020/08/27"
        },
        {
            "id": 10003,
            "name": "JavaScript Fundamentals",
            "duration": 60,
            "cost": 1010,
            "tutor": "MR. KL Abby",
            "startDate": "2020/05/30"
        },
        {
            "id": 10004,
            "name": "Python 3 A-z Tutorial",
            "duration": 50,
            "cost": 4000,
            "tutor": "MS. D Rose",
            "startDate": "2020/06/20"
        },
        {
            "id": 10005,
            "name": "Network Protocols",
            "duration": 56,
            "cost": 3570,
            "tutor": "MR. Sham R ",
            "startDate": "2020/06/15"
        },
        {
            "id": 10006,
            "name": "Engineering Models",
            "duration": 78,
            "cost": 6500,
            "tutor": "MS. Radha",
            "startDate": "2020/09/23"
        },
        {
            "id": 10007,
            "name": "Adobe Photoshop 2016",
            "duration": 52,
            "cost": 7400,
            "tutor": "MS. Lakshmi",
            "startDate": "2020/11/12"
        },
        {
            "id": 10008,
            "name": "Adobe Video Editing",
            "duration": 43,
            "cost": 2500,
            "tutor": "Mr. Mini Rose",
            "startDate": "2020/12/02"
        },
        {
            "id": 10009,
            "name": "CAD Models 2019",
            "duration": 78,
            "cost": 4500,
            "tutor": "Mr. Jhosphine",
            "startDate": "2020/08/15"
        },
        {
            "id": 100010,
            "name": "MS SQL Server for Beginners",
            "duration": 38,
            "cost": 700,
            "tutor": "Mr. Hopper",
            "startDate": "2020/07/25"
        },
        {
            "id": 100011,
            "name": "Boostrap 3 Tutorial",
            "duration": 30,
            "cost": 750,
            "tutor": "Mr. Dinesh",
            "startDate": "2020/08/03"
        },
        {
            "id": 100012,
            "name": "Vue UI/UX For Beginners",
            "duration": 34,
            "cost": 850,
            "tutor": "Mr. Raman",
            "startDate": "2020/08/03"
        },
        {
            "id": 100013,
            "name": "React JS A-Z",
            "duration": 34,
            "cost": 850,
            "tutor": "Mr. Murphy",
            "startDate": "2020/11/16"
        },
        {
            "id": 100014,
            "name": "HTML5 & CSS3 Fundamentals",
            "duration": 40,
            "cost": 950,
            "tutor": "Mr. Happer",
            "startDate": "2020/12/14"
        },
        {
            "id": 100015,
            "name": ".Net MVC Framework",
            "duration": 60,
            "cost": 0,
            "tutor": "Mr. Vengat",
            "startDate": "2020/07/01"
        }
    ];
    res.status(400).send(course);
})





/// THis line is so important (process.env.PORT) becase, cloud picks random port numbers.
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is listening at port : ' + port);
});