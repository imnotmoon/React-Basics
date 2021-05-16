// 자바스크립트에서 함수는 일급임.
// 함수는 값으로 취급된다.
// 함수 자체를 출력할 수 있고, 함수를 인자로 사용할 수 있고, 함수의 결과값으로 함수가 사용될 수도 있다.

const log = (a) => console.log(a);

const add = (a) => a + 5;
console.log(add5);
console.log(add5(5));

const f1 = () => () => 1;
console.log(f1());

const f2 = f1();
console.log(f2);
console.log(f2()); // 원하는 시점에 평가해서 값으로 만든다.

// JS에서는 함수가 일급이라는 성질을 이용해 함수를 조합성과 추상화의 도구로 사용한다.

// 고차함수
// 고차함수는 두가지 유형으로 구분된다
// 1. 함수를 인자로 받아서 실행하는 함수
// 2. 함수를 만들어서 리턴하는 함수

// 1. 함수를 인자로 받아서 실행하는 함수
const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
log(apply1(add2));
// apply1은 인자로 받은 add2에 1을 넣은 값을 실행하게 되는데 1 => 1+2를 실행해 3이 로그에 찍힌다.

const times = (f, n) => {
	let i = -1;
	while (++i < n) f(i);
};
// times 함수는 함수와 정수를 인자로 받아 정수만큼 함수를 실행시킨다.
times(log, 3);
times((a) => log(a + 10), 4);

// 2. 함수를 만들어서 리턴하는 함수
// 함수를 만들어서 리턴하는 함수는 "클로저를 만들어서 리턴한다"
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10); // a가 10임을 기억하는 클로저를 리턴했다.
// add10은 a에 주입한 10의 값을 함수의 주기가 끝났음에도 불구하고 기억하고 있는다.

log(add10);
log(add10(10)); // 20
