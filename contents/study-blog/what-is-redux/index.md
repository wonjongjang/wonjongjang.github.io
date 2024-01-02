---
page: 'study-blog'
categories: ['State-Management']
date: '2023-10-19'
title: 'Redux란?'
summary: 'Redux가 무엇인지, 왜 또는 언제 사용하는지, 용어 설명'
---

전역 애플리케이션 상태를 관리하기 위한 라이브러리

- 특징
  
  - 중앙 집중식 저장소
  
  - 상태는 읽기 전용
    
    - 순수 함수인 Reducers로만 변경 가능
    
    - 이전 상태를 변경하는 것이 아닌 새로운 상태 객체를 생성하여 반환
  
  - 단방향 데이터 흐름
  
  - 미들웨어 지원

# 용어 및 개념

![post](./img/redux-data-flow-diagram.gif)

|          |           | 설명                                                                              |                             |
|:--------:|:---------:|:-------------------------------------------------------------------------------:|:---------------------------:|
| Store    | Dispatch  | 액션을 스토어로 보내는 데 사용                                                               | `state.dispatch(action)`    |
|          | Selectors | 현재 스토어의 상태 반환                                                                   | `state.getState()`          |
|          | Subscribe | 스토어의 상태가 변경될 때마다 실행되는 콜백 함수 등록                                                  | `state.subscribe(listener)` |
| Reducers |           | state와 action을 수신하여 필요에 따라 상태 업데이트 방법을 결정하고 새로운 상태를 반환하는 기능<br/>이벤트 리스너로 생각해도 됨 |                             |
| Action   |           | 발생한 일을 설명하는 이벤트                                                                 |                             |

# Libraries and Tools

- React-Redux : React에서 사용

- Redux-Toolkit : 앱 구축 시 필수적인 패키지와 기능 포함

- Redux DevTools Extension : 상태 변경 내역 표시

# 참고

- [Redux Tutorials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
