---
page: 'study-blog'
categories: ['JavaScript']
date: '2022-08-06'
title: '객체(Object)'
summary: 'JavaScript 객체의 정의, 변경불가성, 불변 데이터 패턴'
---

자바스크립트를 이루고 있는 거의 모든 것 (원시 타입을 제외한 함수, 배열, 정규표현식 등)

변경 가능한 값(mutable value)

프로퍼티의 집합

> **프로퍼티(property)** : 키와 값으로 구성
> 
> - 키(key) : 빈 문자열을 포함한 모든 문자열 / symbol (예약어 X)
> 
> - 값((value) : 모든 값
> 
> **메소드(method)** : 객체에 제한되어 있는 함수

# 변경불가성(Immutability)

객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴

레퍼런스를 참조한 다른 객체에서 객체를 변경하여 의도하지 않은 변경 발생 → 불변 객체로 대처

## 불변 데이터 패턴(immutable data pattern)

- 객체의 방어적 복사(defensive copy) `Object.assign()`
  
  완전한 deep copy X, 객체 내부의 객체는 shallow copy → 변경에 영향을 줌
  
  ```js
  // 타킷 객체로 소스 객체의 프로퍼티를 복사
  Object.assign(target, ...sources)
  
  // Copy
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy);        // { a: 1 }
  console.log(obj == copy); // false
  
  // Merge
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };
  
  const merge = Object.assign({}, o1, o2, o3);
  
  console.log(merge); // { a: 1, b: 2, c: 3 }
  console.log(o1);    // { a: 1 }
  ```

- 불변객체화를 통한 객체 변경 방지 `Object.freeze()`
  
  완전한 deep copy X, 객체 내부의 객체는 shallow copy → 변경에 영향을 줌
  
  Deep freeze로 내부 객체까지 변경 불가능하게 가능
  
  ```js
  const user = {
    name: 'Won',
    address: {
      city: 'Seoul'
    }
  };
  
  Object.freeze(user);
  
  user.name = 'Kim'; // 무시
  console.log(user); // { name: 'Won', address: { city: 'Seoul' } }
  console.log(Object.isFrozen(user)); // true
  
  // deep freeze
  function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
  deepFreeze(user);
  
  user.name = 'Kim';           // 무시
  user.address.city = 'Busan'; // 무시
  console.log(user); // { name: 'Won', address: { city: 'Seoul' } }
  ```

- `Immutable.js`
  
  List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조를 제공

# 참고

- [PoiemaWeb](https://poiemaweb.com/)
