---
page: 'study-blog'
categories: ['Software-Development']
date: '2023-04-11'
title: '자료 구조'
summary: '자료 구조(Data structure)의 정의, 분류'
---

# 자료 구조(Data structure)

자료를 기억장치의 공간 내에 저장하는 방법, 저장된 자료 간의 관계, 처리 방법 등을 연구 분석하는 것

- 분류
  
  - 선형 구조(Linear Structure)
    
    - 배열(Array)
    - 선형 리스트(Liner List)
      - 연속 리스트(Contiguous List)
      - 연결 리스트(Linked List)
    - 스택(Stack)
    - 큐(Queue)
    - 데크(Deque)
  
  - 비선형 구조(Non-Linear Structure)
    
    - 트리(Tree)
    - 그래프(Graph)

## 배열(Array)

동일한 자료형의 데이터들이 같은 크기로 나열되어 순서를 갖고 있는 집합

- 장점
  
  - 데이터마다 동일한 이름의 변수 사용 → 처리 간편
  
  - 반복적인 데이터 처리 수월

- 단점
  
  - 정적인 자료 구조 → 기억장소 추가 어려움, 데이터 삭제 시 메모리 낭비 발생

- 특징
  
  - 첨자 이용 (n개의 첨자 → n차원 배열)

## 선형 리스트(Liner List)

일정한 순서에 의해 나열된 자료 구조

- 구분
  
  - 연속 리스트(Contiguous List) : 배열
  
  - 연결 리스트(Linked List) : 포인터

## 스택(Stack)

후입선출(LIFO; Last In First Out)

## 큐(Queue)

선입선출(FIFO; First In First Out)

## 그래프(Graph)

정점 V(Vertex)와 간선 E(Edge)의 집합으로 구성

`G = (V, E)`

- 구분 - 방향성 유무
  
  - 방향 그래프
  
  - 무방향 그래프
