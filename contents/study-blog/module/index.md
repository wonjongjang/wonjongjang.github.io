---
page: 'study-blog'
categories: ['Software-Design']
date: '2023-03-05'
title: '모듈(Module)'
summary: '모듈(Module)의 개념 및 특징, 공통 모듈의 개념, 결합도의 개념 및 종류, 응집도의 개념 및 종류'
---

모듈화를 통해 분리된 시스템의 각 기능

- 특징
  - 단독 컴파일 가능
  - 재사용 가능
  - 독립성
    - 독립성↑ → 수정 시 다른 모듈에 거의 영향 X, 오류 발견 및 해결 수월
    - 결합도↓, 응집도↑, 모듈 크기↓ → 독립성↑

> **공통 모듈** : 여러 프로그램에서 공통적으로 사용할 수 있는 모듈

# 결합도(Coupling)

모듈 간에 상호 의존하는 정도

두 모듈 사이의 연관 관계

|              종류 (약 → 강)               | 내용 |
| :---------------------------------------: | :--: |
|     자료 결합도<br />(Data Coupling)      |      |
| 스탬프(검인) 결합도<br />(Stamp Coupling) |      |
|    제어 결합도<br />(Control Coupling)    |      |
|   외부 결합도<br />(External Coupling)    |      |
| 공통(공유) 결합도<br />(Common Coupling)  |      |
|    내용 결합도<br />(Content Coupling)    |      |

# 응집도(Cohesion)

모듈의 내부 요소들이 서로 관련되어 있는 정도

모듈이 독립적인 기능으로 정의되어 있는 정도

|               종류 (약 → 강)                | 내용 |
| :-----------------------------------------: | :--: |
| 우연적 응집도<br />(Coincidental Cohesion)  |      |
|    논리적 응집도<br />(Logical Cohesion)    |      |
|   시간적 응집도<br />(Temporal Cohesion)    |      |
|  절차적 응집도<br />(Procedural Cohesion)   |      |
| 교환적 응집도<br />(Communication Cohesion) |      |
|  순차적 응집도<br />(Sequential Cohesion)   |      |
|  기능적 응집도<br />(Functional Cohesion)   |      |
