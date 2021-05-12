// 자바스크립트에서 함수는 일급임.
// 함수는 값으로 취급된다.
// 함수 자체를 출력할 수 있고, 함수를 인자로 사용할 수 있고, 함수의 결과값으로 함수가 사용될 수도 있다.

const add = (a) => a + 5;
console.log(add5);
console.log(add5(5));

const f1 = () => () => 1;
console.log(f1());

const f2 = f1();
console.log(f2);
console.log(f2()); // 원하는 시점에 평가해서 값으로 만든다.

// JS에서는 함수가 일급이라는 성질을 이용해 함수를 조합성과 추상화의 도구로 사용한다.
