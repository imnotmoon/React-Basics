// 백엔드 서버를 만들 때 가장 먼저 제작
// 시작점.

var express = require('express')
var app = express()
var password = require('./password.js')
const bodyParser = require('body-parser');
const {User} = require('./models/User');

// body-parser settings

// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있도록 세팅
app.use(bodyParser.urlencoded({extended : true}));
// application/json
app.use(bodyParser.json());


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


// 회원가입을 위한 라우트
app.post('/register', (req, res) => {
    
    // 회원 가입할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    // body-parser가 있어서 가능
    const user = new User(req.body);
    console.log(user);
    user.save((err, doc) => {
        if(err) return res.json({ success : false, err})
        
        // to client
        return res.status(200).json({
            success : true
        })
        
    });
})


app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log("Example app listening on port 3000"))