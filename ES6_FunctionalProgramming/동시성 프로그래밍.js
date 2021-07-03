// 1. 콜백 패턴
// 2. Promise
// 3. async/await

function add10(a, callback) {
    setTimeout(() => callback(a+10), 100);
}

add10(5, res => {
    add10(res, res => {
        add10(res, res => {
            console.log(res)
        })
    })
});

function add20(a) {
    return new Promise(resolve => {
        return setTimeout(() => resolve(a + 20), 100)
    })
}

add20(5)
    .then(add20)
    .then(add20)
    .then(add20)
    .then(console.log)