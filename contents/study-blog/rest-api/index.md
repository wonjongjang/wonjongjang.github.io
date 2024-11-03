---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: 'REST API'
summary: 'REST API 정의, 구성, 설계 원칙(HTTP 요청 메서드)'
order: 232
---

REST를 기반으로 서비스 API를 구현한 것

> **REST**
>
> HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처

> **RESTful**
>
> REST의 기본 원칙을 성실히 지킨 서비스 디자인

# 구성

REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용 이해 가능

|       구성 요소       |              내용              |    표현 방법     |
| :-------------------: | :----------------------------: | :--------------: |
|    자원(resource)     |              자원              | URI(엔드포인트)  |
|      행위(verb)       |        자원에 대한 행위        | HTTP 요청 메서드 |
| 표현(representations) | 자원에 대한 행위의 구체적 내용 |     페이로드     |

# 설계 원칙

1. URI는 리소스를 표현

   리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용

   이름에 get 같은 행위에 대한 표현 X

   ```
   # bad
   GET /getTodos/1
   GET /todos/show/1
   
   # good
   GET /todos/1
   ```

2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현

   > **HTTP 요청 메서드**
   >
   > 클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법 

   주로 5가지 요청 메서드로 CRUD 구현

   | HTTP 요청 메서드 |      종류      |         목적          | 페이로드 |
   | :--------------: | :------------: | :-------------------: | :------: |
   |       GET        | index/retrieve | 모든/특정 리소스 취득 |    X     |
   |       POST       |     create     |      리소스 생성      |    O     |
   |       PUT        |    replace     |  리소스의 전체 교체   |    O     |
   |      PATCH       |     modify     |  리소소의 일부 수정   |    O     |
   |      DELETE      |     delete     | 모든/특정 리소스 삭제 |    X     |

   



# 참고

- 이웅모. 「모던 자바스크립트 Deep Dive」. 위키북스. 2020
