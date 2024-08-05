---
page: 'study-blog'
categories: ['CSS']
date: ''
title: 'Position'
summary: 'Position 속성'
order: 32
---

문서 상에 요소를 배치하는 방법을 지정

`top`, `right`, `bottom`, `left` 속성과 함께 사용하여 배치할 최종 위치를 결정

|    값    |                                                              |
| :------: | ------------------------------------------------------------ |
|  static  | 기본값<br />요소를 일반적인 문서 흐름에 따라 배치<br />`top`, `right`, `bottom`, `left`, `z-index` 속성이 아무런 영향을 주지 않음 (position 속성 없는 것과 동일) |
| relative | 요소를 일반적인 문서 흐름에 따라 배치<br />`top`, `right`, `bottom`, `left` 속성에 따라 위치 변경<br />`z-index` 값이 auto가 아니라면 새로운 stacking context 생성 |
| absolute | 요소를 일반적인 문서 흐름에서 제거<br />가장 가까운 position 속성이 있는(static 제외) 조상 요소를 기준으로 상대적인 배치<br />position 속성이 있는 조상 요소가 없다면 초기 containing block을 기준으로 배치<br />`z-index` 값이 auto가 아니라면 새로운 stacking context 생성 |
|  fixed   | 요소를 일반적인 문서 흐름에서 제거<br />뷰포트의 초기 containing block을 기준으로 배치<br />스크롤에 관계 없이 화면의 특정 지점에 고정 (floating)<br />항상 새로운 stacking context 생성 |
|  sticky  | 요소를 일반적인 문서 흐름에 따라 배치<br />항상 새로운 stacking context 생성 |

# 참고

- [position - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
