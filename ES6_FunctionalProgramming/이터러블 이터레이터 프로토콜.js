// ES5
let list = [1, 2, 3, 4];
for (var i = 0; i < list.length; i++) {
	console.log(list[i]);
}
let str = "abc";
for (var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

// ES6
for (const a of list) {
	console.log(a);
}
for (const a of str) {
	console.log(a);
}

// ES6 들어서 반복문이 훨씬 명시적이고 간결해지고 선언적으로 바뀌었다.
// 간결하게 만드는 것 이상의 의미가 있다. 순회에 대한 추상화 개념

// JS에는 Array, Set, Map이라는 내장 값들이 들어있다. 이 값들은 모두 for 문으로 순회가 가능하다.
// Array
const arr = [1, 2, 3];
for (const a of arr) log(a);

// Set
const set = new Set([1, 2, 3]);
for (const a of set) log(a);

// Map
const map = new Map(["a", 1], ["b", 2], ["c", 3]);
for (const a of map) log(a);

// 이렇게 모두 같은 스타일로 순회가 가능하다.
// 여기서 Array는 [1]처럼 인덱스(키)로 내부 값들을 조회할 수 있다. 반면에 Set이나 Map은 이게 안됨
// Set이 내부적으로 array처럼 인덱싱이 안된다는것을 의미.
// 근데 셋다 for...of 문법으로 접근이 가능하다? : 추상화가 잘 되어있다는 뜻이다.

// Symbol.iterator
// ES6 들어서 추가된 문법. 말 그대로 심볼이다. 어떤 객체의 키로 사용될 수 있음
let iter1 = arr[Symbol.iterator]();
let iter2 = set[Symbol.iterator]();
let ietr3 = map[Symbol.iterator]();
// 처럼 사용될 수 있음. 전부 함수가 나오는데 이 함수들이 객체를 순회할 수 있도록 도와준다

// 이터러블 / 이터레이터 프로토콜
// Array, Set, Map은 모두 자바스크립트 내장객체로서 Iterator Protocol을 따르고 있다.

// 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값.
// 이터레이터 : { value, done } 객체를 리턴하는 next() 메소드를 가진 값.
iter1.next();
// 이터러블 / 이터레이터 프로토콜 : 이터러블을 for...of, 전개연산자 등과 함께 동작하도록 한 규약

map.keys();
// map.keys() 함수는 이터레이터를 리턴한다. 그 이터레이터는 key들만을 갖고 있음.
// map.values(), map.entries() 모두 같이 이터레이터를 리턴한다.
// 여기서 재밌는건 map.keys()로 나온 이터레이터에 또 [Symbol.iterator]를 뽑아보면 또 이터레이터가 나온다
let keys = map.keys();
let keys_iter = keys[Symbol.iterator]();

// 사용자 정의 이터레이터 / 이터러블 프로토콜
const iterable = {
	[Symbol.iterator]() {
		let i = 3;
		return {
			next() {
				return i == 0 ? { done: true } : { value: i--, done: false };
			},
			[Symbol.iterator]() {
				return this;
			},
		};
	},
};

const iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

for (const a of iterable) log(a);
for (const a of iterator) log(a);

// 이 이터러블은 순회가 가능하다 == for...of 문을 통해 순회가 가능하다.
// 단 모든 iterable / iterator 프로토콜의 솏성을 구현하지는 못했다.
// well-firmed 이터레이터는 자기 자신을 끊임없이 반환하고 어디서든 이전 상태를 기억해서 다음 순회 내용을 이어나간다.
// 따라서 자기 자신을 반환해줘야 하므로 [Symbol.iterator]() { return this } 코드를 추가해준다.

// 이터러블을 순회해도 순회가 되고 이터레이터를 순회해도 순회가 되고 어디서든 다시 호출했을때 자기 자신의 순회내용을 기억해야 한다.

// 브라우저에 구현되어있는 DOM들도 이터러블 / 이터레이터 프로토콜을 따르고 있다
const all = document.querySelectorAll("*");
console.log(all[Symbol.iterator]());

for (const a of all) console.log(a);


// 전개연산자
// 전개연산자도 마찬가지로 이터러블 / 이터레이터 프로토콜을 따른다
const a = [1, 2];
console.log([...a, ...[3, 4]])
// [1, 2, 3, 4]인 하나의 Array가 나온다

a[Symbol.iterator]() = null;
// 위 코드를 실행하고 다시 a에 대해 전개연산자를 사용하면 통하지 않는다.