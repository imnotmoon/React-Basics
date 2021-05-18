const log = console.log;

// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수 => 이터레이터를 리턴하는 함수이다.
function* gen() {
	yield 1;
	yield 2;
	yield 3;

	// 리턴 값을 만들 수도 있다.
	// 리턴 값을 만들면 for...of 문으로 순회할때 리턴 값은 빼고 순회가 된다.
	return 100;
}

// 일반 함수에서 함수 이름 앞에 *를 붙여서 제너레이터를 만든다.
// 제너레이터는 문장으로 순회할 값을 만드는 것도 가능하다. => 어떠한 값이든 순회할 수 있도록 만든다.
//! 제너레이터를 통해 어떤 값이든 순회할 수 있다.

// 이터레이터는 자기 자신을 반환하는 성질이 있기 때문에
let iter = gen();
log(iter.next());
log(iter[Symbol.iterator]() == iter);
// 마지막 문장은 true가 나온다.

// yield는 이터레이터가 순환하는 값들을 의미한다. return과는 분명 다르다.
// 제너레이터로 만든 객체는 이터레이터이므로 for...of 문으로 순회가 가능하다.

// Odds
function* odds(l) {
	for (let i = 0; i < l; i++) {
		if (i % 2) yield i;
	}
}

let iter = odds(10);
log(iter.next());
log(iter.next());
log(iter.next());
// 위와 같이 홀수만 뽑아내는 제너레이터를 만들 수 있다.

// 무한한 정수를 순회하는 이터레이터를 만드는 제너레이터 infinity()
// 다만 평가할때까지만 동작하기 때문에 프로그램이 멈추거나 브라우저가 먹통이 되는 일이 없다.
function* infinity(i = 0) {
	while (true) yield i++;
}

// 제너레이터를 새로운 제너레이터를 만드는데 활용할 수도 있다.
// 제너레이터 odds를 만들기 위해 infinity를 이용
function* odds(l) {
	for (const a of infinity(1)) {
		if (i % 2) yield a;
		if (a == l) return;
	}
}

// limit은 이터러블을 받아 일을 계속 하다가 첫번째 인자인 l의 값을 받으면
// 이터러블을 종료한다.
//* 사실상 Pyhton의 range와 비슷하게 이터러블을 만들 수 있다.
function* limit(l, iter) {
	for (const a of iter) {
		yield a;
		if (a == l) return;
	}
}

// limit을 이용해 odds를 한번 더 수정할 수 있다.
function* odds(l) {
	for (const a of limit(l, infinity(1))) {
		if (a % 2) yield a;
	}
}

// for...of, 전개연산자, 구조 분해, 나머지 연산자
// 제너레이터는 이터레이터 / 이터러블 프로토콜을 따르고 있기 때문에
// 전개 연산자, 구조분해, 나머지 연산자 등 문법들에 모두 적용이 가능하다.

// 전개 연산자
log(...odds(10));
log([...odds(10), ...odds(20)]);

// 구조 분해
const [head, ...tail] = odds(5);
log(head);
log(tail);

const [a, b, ...rest] = odds(10);
log(a);
log(b);
log(rest);
