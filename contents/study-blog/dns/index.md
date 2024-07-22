---
page: 'study-blog'
categories: ['Network']
date: ''
title: 'DNS(Domain Name System)'
summary: 'DNS(Domain Name System)의 정의, 작동 원리'
order: 7
---

문자로 된 도메인 네임을 컴퓨터가 이해할 수 있는 IP 주소로 변환하는 시스템

> **도메인 네임(Domain name)**
>
> 숫자로 된 IP 주소를 사람이 이해하기 쉬운 문자 형태로 표현한 것
>
> ex) `www.example.com`

# 작동 원리

1. 로컬 DNS 서버로 질의
   - 이전에 질의되어 캐시 남아 있다면 캐싱하고 있는 IP 주소 반환
2. 루트 DNS 서버로 질의
3. .com DNS 서버로 질의
4. example.com DNS 서버로 질의
