---
page: 'study-blog'
categories: ['Network']
date: ''
title: 'HTTP(Hypertext Transfer Protocol)'
summary: 'HTTP(Hypertext Transfer Protocol)의 정의, 메서드, GET과 POST 차이'
order: 5
---

HTML 문서, 이미지, 스타일 및 기타 파일과 같은 웹 리소스를 전송하는 데 사용되는 프로토콜

서버-클라이언트 모델의 프로토콜

> **HTTPS(Hypertext Transfer Protocol Secure)**
>
> HTTP의 보안 버전

# HTTP 메서드

| 메서드 |                설명                 | 안전 | 멱등성 | 캐시 가능 |
| :----: | :---------------------------------: | :--: | :----: | :-------: |
|  GET   |             리소스 요청             |  O   |   O    |     O     |
|  POST  |         서버로 데이터 전송          |  X   |   X    |     △     |
|  PUT   | 새로운 리소스 생성 또는 데이터 대체 |  X   |   O    |     X     |
| DELETE |             리소스 삭제             |  X   |   O    |     X     |
| PATCH  |        리소스의 부분적 수정         |  X   |   X    |     X     |

> **안전(Safe)**
>
> HTTP 메서드가 서버의 상태를 변경하지 않는 경우
>
> 읽기 작업만 수행

> **멱등성(Idempotent)**
>
> 동일한 요청을 한 번 보내는 것과 여러 번 연속으로 보내는 것이 같은 효과를 지니고, 서버의 상태도 동일하게 남는 경우
>
> 부수효과(side effect) 존재 X

> **캐시 가능(Cacheable)**
>
> 캐시할 수 있는 HTTP 응답

# HTTP 메시지

- 요청

  ![request](./img/http-request.svg)

- 응답

  ![response](./img/http-response.svg)

# 참고

- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
