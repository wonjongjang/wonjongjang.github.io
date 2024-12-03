---
page: 'study-blog'
categories: ['React']
date: ''
title: 'JSX'
summary: 'JSX'
order: 304
---

자바스크립트를 확장한 문법

자바스크립트 파일을 HTML과 비슷하게 마크업을 작성할 수 있도록 제공

> **마크업(Markup)**
>
> 마크업 언어는 텍스트를 정의하고 표현하기 위해 고안된 것
>
> 태그를 사용하여 표시
>
> ex) HTML, XHTML, XML, SVG

JSX로 작성한 코드는 브라우저에서 실행되기 전 번들링 과정에서 바벨을 통해 일반 자바스크립트 형태의 코드로 변환됨

# 규칙

- 하나의 루트 요소로 반환

  한 컴포넌트에서 여러 요소를 반환하려면 하나의 부모 태그로 감싸야 함

  ```jsx
  export default function TodoList() {
    return (
      <div> {/* 부모 태그 */}
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
        />
        <ul>...</ul>
      </div> {/* 부모 태그 */}
    )
  }
  ```

  부모 태그를 div 대신 Fragment로 대체 가능

  > **Fragment**
  >
  > 브라우저상의 HTML 트리 구조에서 흔적을 남기지 않고 그룹화
  >
  > `<></>` 또는 `<Fragment></Fragment>`

  ```jsx
  export default function TodoList() {
    return (
      <> {/* 부모 태그 */}
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
        />
        <ul>...</ul>
      </> {/* 부모 태그 */}
    )
  }
  ```

- 모든 태그 닫기

  ex) `<img>` → `<img />`, `<li>oranges` → `<li>oranges</li>`

  ```jsx
  export default function TodoList() {
    return (
      <>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </>
    )
  }
  ```

- 카멜 케이스

  대부분의 어트리뷰트를 카멜 케이스로 작성

  ex) `stroke-width` → `strokeWidth`

  > **카멜 케이스(Camel case)**
  >
  > 띄어쓰기를 하지 않고 각 단어의 첫 글자를 대문자로 붙여 쓰되, 전체 단어의 첫 글자는 대문자 또는 소문자로 쓸 수 있는 방식
  >
  > 낙타 등의 혹처럼 보이는 데에서 유래
  >
  > ex) camelCase

# 참고

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx)
- [Markup - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Markup)
- [Camel case - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case)
