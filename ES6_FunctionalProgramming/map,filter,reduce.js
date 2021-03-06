

//* map
const products = [
    { name: '반팔티', price: 15000},
    { name: '긴팔티', price: 20000},
    { name: '핸드폰케이스', price: 15000},
    { name: '후드티', price: 30000},
    { name: '바지', price: 25000}
]

let names = [];
for(const p of products) {
    names.push(p.name);
}


//! 맵 함수의 구조 : 실제로 이렇게 생겼다.
const map = (f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
    }
    return res
}
// 이터러블 프로토콜을 따르는 모든 객체에 적용이 가능하다.

// console.log(map(p => p.name, products))


//* 이터러블 프로토콜을 따른 map의 다형성1
// document.querySelectorAll('*')
    // 을 통해서 나온 결과는 map으로 돌릴수가 없다. iterable 프로토콜을 따르기 때문.
    // document.querySelector는 array를 상속받은 객체가 아니어서
    // map 함수가 prototype에 없다.
//! 앞에서 만들었던 map함수로는 잘 동작한다. 
//! array는 map이 가능하지만 iterable은 map이 불가능하다.

// 그냥 map : Array.prototype.map()   !!!!!!...

//* 이터러블 프로토콜을 따른 map의 다형성2
let m = new Map();
m.set('a', 10)
m.set('b', 20)
const it = m[Symbol.iterator]()
// console.log(it.next());

// 새로운 맵 객체를 다시 만들지만 map 함수를 사용해서 내부의 값을 바꿈.
// console.log(new Map(map(([k, a]) => [k, a * 2], m)))


//* filter
// 특정 금액 이상의 상품만 걸러내는 등의 용도로 사용

// 명령형
let under20000 = []
for(const p of products) {
    if(p.price < 20000) under20000.push(p)
}

// filter 함수로 리팩토링
const filter = (f, iter) => {
    let res = [];
    for(const a of iter) {
        if(f(a)) res.push(a);
    }
    return res
}

// console.log(...filter(p => p.price < 20000, products))


//* reduce 1
//! 값을 축약하는 함수 (이터러블을 하나의 값으로)

const nums = [1, 2, 3, 4, 5]

// 명령형
let total = 0;
for (const n of nums) {
    total = total + n;
}
console.log(total)

const reduce = (f, acc, iter) => {
    // acc가 없을 경우 처리 : iter의 첫번째 값을 acc로 사용한다.
    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value()
    }

    for(const a of iter) {
        acc = f(acc, a)         // 외부함수에 위임
    }
    return acc
}
const add = (a, b) => a+b;
console.log(reduce(add, 0, [1, 2, 3, 4, 5]))    // 15

//! 내부적으로는 아래와 같이 작동한다 (재귀적으로)
// console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5))

// 실제 자바스크립트에서는 초기값을 생략해도 잘 돌아간다
// 내부적으로는 iter의 첫번째 값을 꺼내서 초기값으로 생각한다
// 0, [1, 2, 3, 4, 5] => 1, [2, 3, 4, 5]

//* reduce 2
// reduce는 외부함수에 축약과정을 완전히 위임한다.
console.log(reduce((total_price, product) => total_price + product.price, 0, products))


//* map+filter+reduce 중첩 사용과 함수형 사고
// 함수형 프로그래밍을 할때 평가값을 아무거나 미리 넣어보고
// 해당 평가값을 만드는 함수를 순서대로 넣어준다
// 이러면 좀 빠르다
// top-down 같다.