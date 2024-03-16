---
page: 'project'
startDate: '2023-10-12'
endDate: '2024-02-29'
title: 'KnockKnock'
subTitle: '아티스트와 팬이 다양한 방식으로 소통하는 서비스'
categories: ['React-Native', 'TypeScript', 'Git', 'Jira']
team: ['프론트엔드5', '백엔드5']
link: ['', '']
thumbnail: 'img/logo.png'
---

# 개요

> 커뮤니티 부분 담당

아티스트와 팬이 다양한 방식으로 소통하는 서비스

그리드, 커뮤니티, 채팅, 실시간 라이브, 갤러리 기능을 제공

# 담당 개발 내용

## 퍼블리싱 및 기능

- Redux 및 Redux toolkit으로 상태 및 API 관리

- 한국어, 영어, 일본어가 통합되어 있던 localization 파일을 분리하여 가독성 향상

- 게시글/댓글/대댓글 내용 번역 API를 hooks로 구현하여 중복 로직 제거
  
  - Google Cloud Translation API - Basic v2 활용
  
  - 게시글 목록, 게시글 상세, 댓글, 대댓글에 번역 아이콘 존재

- 파일 업로드 기능을 모든 파트에서 사용할 수 있도록 설계하여 hooks로 구현
  
  - Presigned URL을 이용하여 S3로 파일 업로드
    
    1. Presigned URL 생성 위한 post 요청
    
    2. 응답 받은 URL에 put 요청하여 파일 전송

- 게시글 목록 및 상세 페이지 스켈레톤 스크린으로 UX 향상 `react-native-skeleton-placeholder`

- 커뮤니티 메인
  
  - 게시글 목록 조회 - 팬/아티스트/공지

- 게시글 생성 및 수정
  
  - 게시글 임시 저장 `@react-native-async-storage/async-storage`
  
  - 첨부 파일 순서 Drag and drop `react-native-draggable-flatlist` `react-native-gesture-handler`
  
  - 첨부 파일 삭제

- 게시글 상세
  
  - 게시글 리액션 등록/해제
    
    - 리액션 이모지 LottieView로 lottie json 파일 시각화 `lottie-react-native`
  
  - 게시글 삭제
  
  - 미디어 상세
    
    - 이미지 확대/축소 `react-native-zoom-reanimated`
    
    - 디바이스에 파일 저장 `react-native-blob-util`
  
  - 댓글/대댓글 CRUD
  
  - 댓글/대댓글 좋아요 등록/해제
  
  - 북마크 등록/해제

- 북마크 메인
  
  - 북마크 목록 조회 - 팬/아티스트/공지

## QA

# 산출물
