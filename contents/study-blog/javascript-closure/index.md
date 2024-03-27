---
page: 'study-blog'
categories: ['JavaScript']
date: '2022-08-09'
title: '클로저(Closure)'
summary: 'JavaScript 클로저'
---

함수를 일급 객체로 취급하는 함수형 프로그래밍 언어의 중요한 특성 (자바스크립트 고유 개념 X)

함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합

반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수

자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수

> **렉시컬 스코프(Lexical scope)**
> 
> 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정
> 
> 함수를 선언한 시점에 상위 스코프가 결정

![post](./img/closure.gif)

함수 innerFunc는 자신이 속한 렉시컬 스코프(전역, outerFunc, 자신의 스코프)를 참조 가능

렉시컬 스코프의 레퍼런스를 차례대로 저장하고 있는 실행 컨텍스트의 스코프 체인을 자바스크립트 엔진이 검색

1. innerFunc 함수 스코프(함수 자신의 스코프를 가리키는 활성 객체) 내에서 변수 x 검색 → 검색 실패

2. innerFunc 함수를 포함하는 외부 함수 outerFunc의 스코프(함수 outerFunc의 스코프를 가리키는 함수 outerFunc의 활성 객체)에서 변수 x 검색 → 검색 성공

# 활용

- 상태 유지

- 전역 변수의 사용 억제

- 정보의 은닉

# 참고

- [PoiemaWeb](https://poiemaweb.com/js-prototype#42-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EB%A1%9C-%EC%83%9D%EC%84%B1%EB%90%9C-%EA%B0%9D%EC%B2%B4%EC%9D%98-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B8)

- [JavaScript Visualizer](https://ui.dev/javascript-visualizer)
