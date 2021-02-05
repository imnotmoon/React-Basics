const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,        // space remove
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },

    // 관리자 / 일반유저
    role : {
        type : Number,
        default : 0
    },

    image : String,

    token : {
        type : String
    },

    tokenExp : {
        type : Number
    }
})

// 모델에 save하기 전에 
userSchema.pre('save', function(next) {

    var user = this;
    
    // 다른거 고칠때 말고 비밀번호를 수정할때만
    if(user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        // salt이용 : salt를 먼저 생성
            // saltRounds : 솔트가 몇 글자인지
        let saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) return next(err);
            
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) return next(err);
                    user.password = hash;
                    next();
            })

        })
    } else {
        next();
    }
})
// 이게 끝나면 save를 호출


// 난또 메소드가 있는줄알았는데 새로 만들어야되네

// mongoose.Schema 클래스의 메소를 정의하는 부분
userSchema.methods.comparePassword = function(plainPassword, callback) {

    // plainPassword를 암호화해서 db의 비밀번호와 같은지 확인
    // 오 암호화를 저 위에 코드대로 새로 안해도 편한방법이 있음
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
        if(err) return callback(err);

        callback(null, isMatch)     // error가 null이고...
    })
}

userSchema.methods.generateToken = function(callback) {
    
    var user = this;

    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token;
    user.save(function(err, user) {
        if(err) return callback(err);
        callback(null, user);
    })
}



// schema를 모델로 감싸준다
const User = mongoose.model('User', userSchema)
module.exports = { User }