// 백엔드 서버를 만들 때 가장 먼저 제작
// 시작점.

var express = require('express')
var app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./models/User');
const { auth } = require('./middleware/auth');

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
app.post('/api/users/register', (req, res) => {

    console.log(req.body)
    
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

app.post('/api/users/login', (req, res) => {

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

// Auth의 필요성 : 
// 로그인된 유저만 접근 가능한 페이지가 있음. 이를 분리하기 위해서

// 토큰을 클라이언트 -> 쿠키 / 서버 -> DB에 넣어줬음
// 이들이 일치하는지 계속 체크해야함
// 1. 클라이언트의 쿠키를 서버에 전달(쿠키가 encode 되어있는 상태)
// 2. decode하면 user_id가 나옴. 복호화

// auth : middleware. 콜백을 보내기 전에 중간에 거치는거
app.get('/api/users/auth', auth, (req, res) => {

    // 여기까지 미들웨어를 통과해왔다는 얘기는 Authentication이 True라는 뜻.
    // auth에서 req에 유저객체와 복호화된 토큰으 넣어줫기 때문에 req.user로 접근이 가능하다
    res.status(200).json({
        _id : req.user._id,
        // 0이면 일반유저 / 1이면 Admin
        isAdmin : req.user.role == 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role : req.user.role,
        image : req.user.image
    })

    // 실패할 경우 auth middleware에서 실패 response를 던짐
})


// logout
// 로그아웃 하려는 유저를 DB에서 찾아서
// 그 유저의 토큰을 지워준다 ********

// -> 로그인할때 토큰이 생겨서 클라이언트의 쿠키에 들어가고
// -> auth가 필요한 경우 클라이언트의 쿠키와 서버의 DB에서 토큰을 대조
// -> 로그아웃하면 DB에서 토큰을 지운다
app.get('/api/users/logout', auth, (req, res) => {
    
    // 유저 모델을 가져와서 로그아웃하려는 모델을 찾음
    // param1 : find할 조건
    // param2 : update할 내용
    // param3 : callback
    User.findOneAndUpdate({_id : req.user._id}, 
        { token : ""}, (err, user) => {
            if(err) return res.json({ success: false, err })
            return res.status(200).send({
                success : true
            })
        })
})



app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(5000, () => console.log("Example app listening on port 3000"))