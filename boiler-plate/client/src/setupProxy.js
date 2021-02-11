const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            // 노드 서버가 5000번
            target: 'http://localhost:5000',
            changeOrigin: true
        })
    )
}