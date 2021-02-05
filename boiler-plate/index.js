// 백엔드 서버를 만들 때 가장 먼저 제작
// 시작점.

var express = require('express')
var app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./models/User');

const config = require('./config/key');

// body-parser settings

// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있도록 세팅
app.use(bodyParser.urlencoded({extended : true}));

// application/json
app.use(bodyParser.json());
app.use(cookieParser());


// Mongoose Database Initialize
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
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
    // 비밀번호 암호화 : user.js의 pre를 거침

    user.save((err, doc) => {
        if(err) return res.json({ success : false, err})
        
        // to client
        return res.status(200).json({
            success : true
        })
        
    });
})

app.post('/login', (req, res) => {

    // 1. DB안에서 요청된 email 찾기
    User.findOne({ email : req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess : false,
                message : "제공된 이메일에 해당하는 유저가 없습니다"
            })
        }
 
        // 2. 요청한 이메일이 있다면, 비밀번호가 일치하는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({
                loginSuccess : false,
                message : "비밀번호가 틀렸습니다."
            })
            
            // 3. 그 유저를 위한 토큰을 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다. 쿠키에 보관할수도 / 로컬 스토리지에 보관할수도 => 일단은 쿠키에 저장하기로
                res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess : true,
                    userId : user._id
                });

            })
        })

    })

    


    


})


app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log("Example app listening on port 3000"))