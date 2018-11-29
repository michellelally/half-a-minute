var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//importing mongoose
var mongoose = require('mongoose');

//connection string
var mongoDB = 'mongodb://michellelally:datarep2018@ds213053.mlab.com:13053/half-a-minute'

//connecting to the database
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Schema
var Schema = mongoose.Schema;

//How its writing the data
var wordsSchema = new Schema({
    words: String
})

//Data Model
var WordModel = mongoose.model('words', wordsSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/words', function (req, res) {
    console.log("Word added: " + req.body.words);
    WordModel.create({
        words: req.body.words //words: has to match schema name
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    })
});

app.get('/api/words', function (req, res) {
    WordModel.find(function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    })
})

app.delete('/api/words/:id', function (req, res) {
    WordModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.json(data);//send back 
        });
})

//Update
app.get('/api/words/:id', function (req, res) {
    console.log("Read word: ", req.params.id);
    WordModel.find({ _id: req.params.id },
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/words/:id', function (req, res) {
    console.log("Word ID: ", req.params.id);
    console.log("Word Body: ", req.body);

    WordModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            res.json(data);
        });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

// app.use("/", express.static(path.join(__dirname, "angular")));
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, "angular", "index.html"));
// })
