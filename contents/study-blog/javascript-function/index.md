---
page: 'study-blog'
categories: ['JavaScript']
date: '2022-08-07'
title: '함수(Function)'
summary: 'JavaScript 함수의 정의 방식, 호이스팅, 일급 객체, 매개변수/인수, this'
---

어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록

여러번 호출 가능 → 코드의 재사용

일급 객체(First-class object)

> **일급 객체(First-class object)**
> 
> 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상
> 
> - 특징
>   
>   - 무명의 리터럴로 표현 가능
>   
>   - 변수 또는 자료 구조에 저장 가능
>   
>   - 함수의 파라미터로 전달 가능
>   
>   - 반환값(return value)으로 사용 가능

# 정의 방식

- 함수 선언문(Function declaration)
  
  function 키워드, 함수명, 매개변수, 몸체로 구성
  
  함수 호이스팅 발생 (자바스크립트 엔진이 스크립트 로딩 시점에 바로 초기화하고 이를 VO에 저장)
  
  ```js
  function square(number) {
    return number * number;
  }
  
  // 내부적으로 자바스크립트 엔진이 기명 함수 표현식으로 변환
  const square = function square(number) {
    return number * number;
  };
  // 함수명으로 호출되는 듯 보이지만 사실은 변수명으로 호출된 것
  // 함수 선언문도 함수 표현식과 동일하게 함수 리터럴 방식으로 정의되는 것
  ```

- 함수 표현식(Function expression)
  
  함수 리터럴 방식으로 정의하고 변수에 할당
  
  함수 호이스팅이 아닌 변수 호이스팅 발생 (스크립트 로딩 시점에 VO에 함수를 할당하지 않고 runtime에 해석된 후 실행)
  
  ```js
  const square = function(number) {
    return number * number;
  };
  
  // 기명 함수 표현식(named function expression)
  const s1 = function multiply(a, b) {
    return a * b;
  };
  
  // 익명 함수 표현식(anonymous function expression)
  const s2 = function(a, b) {
    return a * b;
  };
  ```

- Function 생성자 함수
  
  함수 선언문/표현식 모두 Function 생성자 함수의 축약법(short-hand)
  
  일반적으로 사용 X
  
  ```js
  new Function(arg1, arg2, ... argN, functionBody)
  ```
  
  ```js
  const square = new Function('number', 'return number * number');
  console.log(square(10)); // 100
  ```

> **함수 호이스팅(Function hoisting)** : 함수가 정의되기 이전에 함수 호출 가능
> 
> **변수 객체(VO, Variable Object)**

# 매개변수(Parameter)와 인수(Argument)

```js
const square = function (p1, p2) { // 매개변수 p1, p2에 전달 받은 인수 할당
    console.log(p1, p2); // 1 undefined

    // 함수는 호출될 때 매개변수 외에 arguments 객체와 this를 암묵적으로 전달 받음
    console.log(arguments);
    console.log(this);
};

square(1); // 함수에 인수 1 전달
```

# this

> - Java의 this
>   
>   - 인스턴스 자신(self)을 가리키는 참조변수
>   
>   - 주로 매개변수와 멤버변수 이름이 같을 경우 구분하기 위해 사용
>   
>   ```java
>   public Class Person {
>   
>     private String name;    // 멤버변수
>   
>     public Person(String name) {    // 매개변수
>       this.name = name;    // 멤버변수 name = 매개변수 name
>     }
>   }
>   ```

자바스크립트의 this는 함수 호출 방식에 따라 this에 바인딩할 어떤 객체가 동적으로 결정

- 함수 호출 방식
  
  - 함수 호출
  
  - 메소드 호출
  
  - 생성자 함수 호출
  
  - apply/call/bind 호출
  
  ```js
  const foo = function () {
    console.dir(this);
  };
  
  // 함수 호출
  foo(); // window
  // window.foo();
  
  // 메소드 호출
  const obj = { foo: foo };
  obj.foo(); // obj
  
  // 생성자 함수 호출
  const instance = new foo(); // instance
  
  // apply/call/bind 호출
  const bar = { name: 'bar' };
  foo.call(bar);   // bar
  foo.apply(bar);  // bar
  foo.bind(bar)(); // bar
  ```

# 참고

- [PoiemaWeb](https://poiemaweb.com/)
