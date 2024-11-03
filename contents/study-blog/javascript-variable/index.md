---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: '변수 키워드 - var, let, const'
summary: 'JavaScript의 변수 키워드인 var, let, const 차이'
order: 202
---

| 키워드 | 재선언 | 재할당 | 스코프 | 비고     |
| ------ | ------ | ------ | ------ | -------- |
| var    | O      | O      | 함수   | 사용 X   |
| let    | X      | O      | 블록   | ES6 도입 |
| const  | X      | X      | 블록   | ES6 도입 |

# var 키워드의 문제점

- 변수 중복 선언 허용 → 의도치 않은 변수 값 변경 발생
- 함수 레벨 스코프 → 전역 변수 남발 가능성↑
  - 코드 블록 내 선언한 변수는 전역 변수
  - for 문 내부에서 선언한 변수는 전역 변수
- 변수 호이스팅 → 가독성↓, 오류 발생 여지 남김

# 참고

- [PoiemaWeb](https://poiemaweb.com/js-data-type-variable)
