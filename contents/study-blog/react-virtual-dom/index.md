---
page: 'study-blog'
categories: ['React']
date: ''
title: 'Virtual DOM'
summary: 'Virtual DOM 정의, 절차, 장점'
order: 302
---

UI의 가상적인 표현을 메모리에 저장하고 실제 DOM과 동기화하는 프로그래밍 개념

- 장점
  - DOM 처리 횟수 최소화 → 효율↑
  - UI 업데이트 과정의 복잡함 해소 → 업데이트 처리 간결성

# 절차

1. UI가 변경되면 전체 UI를 Virtual DOM에 리렌더링
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
3. 변경된 부분만 실제 DOM에 적용
