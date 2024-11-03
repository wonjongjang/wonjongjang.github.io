---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: '배열(Array)'
summary: '자바스크립트 배열의 정의,'
order: 222
---

여러 개의 값을 순차적으로 나열한 자료구조

# 자바스크립트 배열

- 특징

  - 객체 타입 (배열 타입 X)

    배열은 객체지만 일반 객체와는 구별되는 특징 존재

    |      구분       |           객체           |     배열     |
    | :-------------: | :----------------------: | :----------: |
    |      구조       | 프로퍼티 키, 프로퍼티 값 | 인덱스, 요소 |
    |    값의 참조    |       프로퍼티 키        |    인덱스    |
    |    값의 순서    |            X             |      O       |
    | length 프로퍼티 |            X             |      O       |

  - 배열의 요소를 위한 각각의 메모리 공간이 동일한 크기를 갖지 않아도 됨

  - 배열의 요소가 연속적으로 이어져 있지 않을 수 있음 → 희소배열(sparse array)

    > 희소 배열의 length > 희소 배열의 실제 요소 개수
    >
    > 문법적으로 희소 배열을 허용하지만 사용하지 않는 것이 좋음 → 같은 타입의 요소를 연속적으로 위치시키는 것이 최선

  ⇒ 일반적인 배열의 동작을 흉내 낸 특수한 객체

- 단점

  - 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근할 때 일반적인 배열보다 성능↓

- 장점

  - 요소를 삽입/삭제할 때 일반적인 배열보다 성능↑

# 배열 고차 함수

> **고차 함수(Higher-Order Function, HOF)**
>
> 함수를 인수로 전달받거나 함수를 반환하는 함수
>
> 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반

> **함수형 프로그래밍**
>
> 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고, 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임

## Array.prototype.map

자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출

콜백 함수의 반환값들로 구성된 새로운 배열 반환 (원본 배열 변경 X)

`호출한 배열의 length = 생성하여 반환하는 새로운 배열의 length` (1:1 매핑)

```javascript
const numbers = [1, 4, 9];

// map 메서드의 콜백 함수에는 3개(요소값, 인덱스, this)의 인수를 전달
const roots = numbers.map((item, index, arr) => {
	console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
	return Math.sqrt(item);
});
/*
  요소값: 1, 인덱스: 0, this: [1,4,9]
  요소값: 4, 인덱스: 1, this: [1,4,9]
  요소값: 9, 인덱스: 2, this: [1,4,9]
*/

// 새로운 배열 반환
console.log(roots); 	// [ 1, 2, 3 ]
// 원본 배열 변경 X
console.log(numbers);	// [ 1, 4, 9 ]
```

## Array.prototype.filter

자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출

콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열 반환 (원본 배열 변경 X)

`호출한 배열의 length >= 생성하여 반환하는 새로운 배열의 length`

```javascript
const numbers = [1, 2, 3, 4, 5];

// filter 메서드의 콜백 함수에는 3개(요소값, 인덱스, this)의 인수를 전달
const odds = numbers.filter((item, index, arr) => {
	console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
	return item % 2;
});
/*
  요소값: 1, 인덱스: 0, this: [1,2,3,4,5]
  요소값: 2, 인덱스: 1, this: [1,2,3,4,5]
  요소값: 3, 인덱스: 2, this: [1,2,3,4,5]
  요소값: 4, 인덱스: 3, this: [1,2,3,4,5]
  요소값: 5, 인덱스: 4, this: [1,2,3,4,5]
*/

// 새로운 배열 반환
console.log(odds); 		// [ 1, 3, 5 ]
// 원본 배열 변경 X
console.log(numbers);	// [ 1, 2, 3, 4, 5 ]
```

## Array.prototype.reduce

자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출

하나의 결과값을 만들어 반환 (원본 배열 변경 X)

초기값은 옵션이라 생략 가능하지만, 언제나 초기값을 전달하는 것이 안전

```javascript
const numbers = [1, 2, 3, 4];

/*
  reduce 메서드는 2개(콜백 함수, 초기값)의 인수를 전달
  const sum = numbers.reduce(콜백 함수, 초기값);

  reduce 메서드의 콜백 함수에는 4개(콜백 함수의 이전 반환값, 요소값, 인덱스, this)의 인수를 전달
*/
const sum = numbers.reduce((accumulator, currentValue, index, array) => {
	console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, this: ${JSON.stringify(array)}, 콜백 함수의 반환값: ${accumulator + currentValue}`);
	return accumulator + currentValue;
}, 0);
/*
  accumulator: 0, currentValue: 1, index: 0, this: [1,2,3,4], 콜백 함수의 반환값: 1
  accumulator: 1, currentValue: 2, index: 1, this: [1,2,3,4], 콜백 함수의 반환값: 3
  accumulator: 3, currentValue: 3, index: 2, this: [1,2,3,4], 콜백 함수의 반환값: 6
  accumulator: 6, currentValue: 4, index: 3, this: [1,2,3,4], 콜백 함수의 반환값: 10
*/

// 하나의 결과값 반환
console.log(sum); 		// 10
// 원본 배열 변경 X
console.log(numbers);	// [ 1, 2, 3, 4 ]
```



# 참고

- 이웅모. 「모던 자바스크립트 Deep Dive」. 위키북스. 2020
