// 백엔드 서버를 만들 때 가장 먼저 제작
// 시작점.

var express = require('express')
var app = express()
var password = require('./password.js')

// Mongoose Database Initialize
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://imnotmoon:' + password + '@boiler-plate.ph5gj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true, 
    useUnifiedTopology : true, 
    useCreateIndex : true, 
    useFindAndModify : false
}).then(() => {
    console.log('MongoDB Connected!');
}).catch( err => {
    console.log(err);
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log("Example app listening on port 3000"))