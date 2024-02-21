---
page: 'study-blog'
categories: ['JavaScript']
date: '2022-08-22'
title: '변수 생성 단계 및 호이스팅(Variable Hoisting)'
summary: 'JavaScript의 변수 생성 단계 및 호이스팅'
---

# 변수 생성 단계

| 단계                           | 설명                                            |
| ---------------------------- | --------------------------------------------- |
| 선언 단계(Declaration phase)     | 변수 객체에 변수 등록<br/>변수 객체는 스코프가 참조하는 대상이 됨       |
| 초기화 단계(Initialization phase) | 변수 객체에 등록된 변수를 메모리에 할당<br/>변수를 undefined로 초기화 |
| 할당 단계(Assignment phase)      | undefined로 초기화된 변수에 실제값 할당                    |

# 변수 호이스팅(Variable Hoisting)

모든 선언문(var, let, const, function, class)이 해당 스코프의 선두로 옮겨진 것처럼 동작하는 특성

선언되기 이전에 참조 가능

- var
  
  선언과 초기화가 한번에 이루어짐 → 선언문 이전에 변수에 접근해도 에러 X
  
  ![post](./img/var-lifecycle.png)
  
  ```javascript
  // 스코프의 선두에서 선언 단계와 초기화 단계가 실행
  // 따라서 변수 선언문 이전에 변수 참조 가능
  console.log(foo); // undefined
  
  var foo;
  console.log(foo); // undefined
  
  foo = 1; // 할당문에서 할당 단계가 실행
  console.log(foo); // 1
  ```

- let
  
  선언과 초기화가 분리되어 진행
  
  ![let-lifecycle](./img/let-lifecycle.png)
  
  ```javascript
  // 스코프의 선두에서 선언 단계가 실행
  // 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않음
  // 따라서 변수 선언문 이전에 변수를 참조할 수 없음
  console.log(foo); // ReferenceError: foo is not defined
  
  let foo; // 변수 선언문에서 초기화 단계가 실행
  console.log(foo); // undefined
  
  foo = 1; // 할당문에서 할당 단계가 실행
  console.log(foo); // 1
  ```
  
  ES6에서는 호이스팅이 발생하지 않는 것처럼 보이지만, 코드 블록 내에서 선언해보면 호이스팅이 발생하는 것을 확인할 수 있음
  
  ```javascript
  let foo = 1; // 전역 변수
  
  {
    console.log(foo); // ReferenceError: foo is not defined
    let foo = 2; // 지역 변수
  }
  ```
  
  let은 블록 레벨 스코프이기 때문에 전역 변수의 값이 출력되지 않음
  
  지역 변수가 해당 스코프에서 호이스팅되어 TDZ에 빠지게 되고 참조 에러 발생

# 참고

- [PoiemaWeb](https://poiemaweb.com/)
