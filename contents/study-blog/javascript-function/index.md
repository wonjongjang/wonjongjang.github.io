---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: '함수(Function)'
summary: 'JavaScript 함수의 정의 방식, 호이스팅, 일급 객체, 매개변수/인수'
order: 212
---

일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것

필요할 때 여러번 호출 가능 → 코드의 재사용 → 유지보수 편의성 ↑, 코드 신뢰성 ↑

일급 객체(first-class object)

> **일급 객체의 조건**
>
> - 무명의 리터럴로 생성 가능 (런타임에 생성 가능)
>
> - 변수 또는 자료 구조에 저장 가능
>
> - 함수의 매개변수에 전달 가능
>
> - 함수의 반환값으로 사용 가능

# 정의 방식

- 함수 선언문(function declaration)

  function 키워드, 함수명, 매개변수, 몸체로 구성

  함수 호이스팅 발생 (자바스크립트 엔진이 스크립트 로딩 시점에 바로 초기화하고 이를 VO에 저장)

  > **함수 호이스팅(function hoisting)** : 함수가 정의되기 이전에 함수 호출 가능

  ```js
  function square(number) {
    return number * number
  }

  // 내부적으로 자바스크립트 엔진이 기명 함수 표현식으로 변환
  const square = function square(number) {
    return number * number
  }
  // 함수명으로 호출되는 듯 보이지만 사실은 변수명으로 호출된 것
  // 함수 선언문도 함수 표현식과 동일하게 함수 리터럴 방식으로 정의되는 것
  ```

- 함수 표현식(function expression)

  함수 리터럴 방식으로 정의하고 변수에 할당

  함수 호이스팅이 아닌 변수 호이스팅 발생 (스크립트 로딩 시점에 VO에 함수를 할당하지 않고 runtime에 해석된 후 실행)

  함수 선언문 대신 사용할 것을 권장 (함수 호이스팅은 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 규칙을 무시)

  ```js
  const square = function (number) {
    return number * number
  }

  // 기명 함수 표현식(named function expression)
  const s1 = function multiply(a, b) {
    return a * b
  }

  // 익명 함수 표현식(anonymous function expression)
  const s2 = function (a, b) {
    return a * b
  }
  ```

- Function 생성자 함수

  함수 선언문/표현식 모두 Function 생성자 함수의 축약법(short-hand)

  일반적이거나 바람직하지 X

  ```js
  new Function(arg1, arg2, ...argN, functionBody)
  ```

  ```js
  const square = new Function('number', 'return number * number')
  console.log(square(10)) // 100
  ```

- 화살표 함수(arrow function)

  ES6 도입

  항상 익명 함수로 정의

  ```javascript
  const square = (x, y) => x + y
  console.log(square(2, 5)) // 7
  ```

# 매개변수(parameter)와 인수(argument)

```js
const square = function (p1, p2) {
  // 매개변수 p1, p2에 전달 받은 인수 할당
  console.log(p1, p2) // 1 undefined

  // 함수는 호출될 때 매개변수 외에 arguments 객체와 this를 암묵적으로 전달 받음
  console.log(arguments)
  console.log(this)
}

square(1) // 함수에 인수 1 전달
```

- 함수는 매개변수와 인수의 개수가 일치하는지 체크 X (에러 발생 X)

  - 매개변수 > 인수 ⇒ 할당되지 않은 매개변수의 값은 undefined

  - 매개변수 < 인수 ⇒ 초과된 인수는 무시됨 (arguments 객체의 프로퍼티로 보관)

- 매개변수는 최대 3개 이상 넘지 않는 것을 권장

# arguments 객체

함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체

함수 내부에서 지역 변수처럼 사용

가변 인자 함수 구현 시 유용

# this

> **Java의 this**
>
> 인스턴스 자신(self)을 가리키는 참조변수
>
> 주로 매개변수와 멤버변수 이름이 같을 경우 구분하기 위해 사용
>
> ```java
> public Class Person {
>  
>   private String name;    // 멤버변수
>  
>   public Person(String name) {    // 매개변수
>     this.name = name;    // 멤버변수 name = 매개변수 name
>   }
> }
> ```

자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable) → 프로퍼티/메서드 참조 가능

this 바인딩(this가 가리키는 값)은 함수 호출 방식에 따라 동적으로 결정

|                       함수 호출 방식                       |                         this 바인딩                          |
| :--------------------------------------------------------: | :----------------------------------------------------------: |
|                       일반 함수 호출                       |                      전역 객체 `window`                      |
|                        메서드 호출                         |        메서드를 호출한 객체 (메서드를 소유한 객체 X)         |
|                      생성자 함수 호출                      |             생성자 함수가 미래에 생성할 인스터스             |
| Function.prototype.apply/call/bind 메서드에 의한 간접 호출 | Function.prototype.apply/call/bind 메서드에 첫번째 인수로 전달한 객체 |

```javascript
const foo = function () {
	console.dir(this);
};

// 1. 일반 함수 호출
foo(); // window

// 2. 메서드 호출
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
const bar = { name: 'bar' };
foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar)(); // bar
```

# 참고

- [PoiemaWeb](https://poiemaweb.com/js-function)
