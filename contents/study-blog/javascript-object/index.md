---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: '객체(Object)'
summary: 'JavaScript 객체의 정의, 얕은 복사와 깊은 복사, 불변성, 불변 데이터 패턴'
order: 210
---

자바스크립트를 구성하는 거의 모든 것 (원시 타입을 제외한 함수, 배열, 정규표현식 등)

다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조

변경 가능한 값(mutable value)

0개 이상의 프로퍼티로 구성된 집합

프로퍼티와 메서드로 구성된 집합

> **프로퍼티(property)** : 객체의 상태를 나타내는 값
>
> - 키(key) : 빈 문자열을 포함한 모든 문자열 / symbol (예약어 X)
>
> - 값(value) : 사용할 수 있는 모든 값
>
> **메서드(method)** : 프로퍼티를 참조하고 조작할 수 있는 동작

# 얕은 복사와 깊은 복사

복사로 생성된 객체는 원본과는 다른 객체

- 얕은 복사(shallow copy): 한 단계까지만 복사하는 것 (객체에 중첩되어 있는 객체는 참조 값을 복사)
  - slice 메서드

  - 스프레드 문법

  - Object.assign

- 깊은 복사(deep copy): 객체에 중첩되어 있는 객체까지 모두 복사하는 것 (완전한 복사본)
  - Lodash 라이브러리의 cloneDeep 메서드


```javascript
const o = { x: { y: 1 } }

// 얕은 복사
const c1 = { ...o } // 스프레드 방법
console.log(c1 === o) // false
console.log(c1.x === o.x) // true

// 깊은 복사
const _ = require('lodash') // Lodash의 cloneDeep 방법
const c2 = _.cloneDeep(o)
console.log(c2 === o) // false
console.log(c2.x === o.x) // false
```

# 불변성(immutability)

객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴

레퍼런스를 참조한 다른 객체에서 객체를 변경하여 의도하지 않은 변경 발생 → 불변 객체로 대처

## 불변 데이터 패턴(immutable data pattern)

- 객체의 방어적 복사(defensive copy) `Object.assign()`

  완전한 deep copy X, 객체 내부의 객체는 shallow copy → 변경에 영향을 줌

  ```js
  // 타킷 객체로 소스 객체의 프로퍼티를 복사
  Object.assign(target, ...sources)

  // Copy
  const obj = { a: 1 }
  const copy = Object.assign({}, obj)
  console.log(copy) // { a: 1 }
  console.log(obj == copy) // false

  // Merge
  const o1 = { a: 1 }
  const o2 = { b: 2 }
  const o3 = { c: 3 }

  const merge = Object.assign({}, o1, o2, o3)

  console.log(merge) // { a: 1, b: 2, c: 3 }
  console.log(o1) // { a: 1 }
  ```

- 불변 객체를 통한 객체 변경 방지 `Object.freeze()`

  완전한 deep copy X, 객체 내부의 객체는 shallow copy → 변경에 영향을 줌

  재귀적으로 호출하여 중첩 객체까지 변경 불가능하게 가능 → deep freeze

  ```js
  const user = {
    name: 'Won',
    address: {
      city: 'Seoul',
    },
  }

  Object.freeze(user)

  user.name = 'Kim' // 무시
  console.log(user) // { name: 'Won', address: { city: 'Seoul' } }
  console.log(Object.isFrozen(user)) // true

  // deep freeze
  function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj)

    props.forEach(name => {
      const prop = obj[name]
      if (typeof prop === 'object' && prop !== null) {
        deepFreeze(prop)
      }
    })
    return Object.freeze(obj)
  }

  deepFreeze(user)

  user.name = 'Kim' // 무시
  user.address.city = 'Busan' // 무시
  console.log(user) // { name: 'Won', address: { city: 'Seoul' } }
  ```

- `Immutable.js`

  List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조를 제공

# 참고

- [PoiemaWeb](https://poiemaweb.com/js-object)
