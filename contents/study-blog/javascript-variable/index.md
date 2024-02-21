---
page: 'study-blog'
categories: ['JavaScript']
date: '2022-08-21'
title: '변수 키워드 (var, let, const)'
summary: 'JavaScript의 변수 키워드인 var, let, const 차이'
---

| 키워드   | 재선언 | 재할당 | 스코프 | 비고     |
| ----- | --- | --- | --- | ------ |
| var   | O   | O   | 함수  | 사용 X   |
| let   | X   | O   | 블록  | ES6 도입 |
| const | X   | X   | 블록  | ES6 도입 |

> **var 키워드의 문제점**
> 
> - 함수 레벨 스코프
>   
>   - 전역 변수의 남발
>   
>   - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조 가능
> 
> - 키워드 생략 허용 → 의도하지 않은 변수의 전역화
> 
> - 중복 선언 허용 → 의도하지 않은 변수값 변경
> 
> - 변수 호이스팅 → 변수 선언 전 참조 가능

# 참고

- [PoiemaWeb](https://poiemaweb.com/)
