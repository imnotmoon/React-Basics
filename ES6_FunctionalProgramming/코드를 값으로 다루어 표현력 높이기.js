// 함수형 프로그래밍에서는 코드를 값으로 다루는 아이디어를 많이 사용
// 어떤 함수가 코드인 함수를 받아서 -> 평가하는 시점을 원하는대로ㅗ
// 코드의 표현력을 높인다

const reduce = (f, acc, iter) => {
    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value
    }

    for (const a of iter) {
        acc = f(acc, a)
    }

    return acc
}

//* go
const go = (...args) => reduce((a, f) => f(a), args);

go(
    0, a => a+1, a => a+10, a => a+100, console.log
)