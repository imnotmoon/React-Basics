const { User } = require("../models/User");


// 인증 처리를 하는 곳
// 토큰을 가지고 DB에 실제로 접근하는 부분

let auth = (req, res, next) => {

    // 1. 클라이언트 쿠키에서 토큰을 가져온다
    // 토큰은 리퀘스트 객체 > 쿠키에 담겨있음
    let token = req.cookies.x_auth;    
    
    // 2. 토큰을 복호화한 후 유저를 찾는다
    User.findByToken(token, (err, user) => {
        
        if(err) throw err;
        if(!user) return res.json({
            isAuth : false,
            error : true
        });

        // 리퀘스트에 복호화된 토큰과 찾은 유저 객체를 담아주면 편하니까
        req.token = token;
        req.user = user;

        // next를 만나지 못하면 미들웨어인 여기서 멈춰버림
        next();
    }

    // 3. 유저가 있으면 인증 성공


    // 3-2. 유저가 없으면 인증 실패

}


module.exports = {auth};