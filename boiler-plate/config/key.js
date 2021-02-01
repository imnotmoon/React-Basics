
// 배포환경에 맞게 키를 가져오는 방식을 다르게 함
if(process.env.NODE_ENV === '') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}