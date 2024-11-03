---
page: 'study-blog'
categories: ['CSS']
date: ''
title: 'SASS(Syntactically Awesome Style Sheets)'
summary: 'CSS 전처리기 정의, SASS 장점 및 기능'
order: 110
---

CSS 전처리기 중 하나

> **CSS 전처리기(CSS preprocessor)**
>
> 고유한 문법을 사용하여 CSS를 생성할 수 있게 해주는 프로그램
>
> 기존 CSS에는 없는 기능을 추가하여 한계를 보완한 CSS의 확장

- 장점

  - 재사용 수월
  - 가독성 및 유지보수 편의성 ↑

- 기능

  - 변수의 사용
  - 조건문과 반복문
  - Import
  - Nesting
  - Mixin
  - Extend/Inheritance

- 표기법

  - SASS 표기법
  - SCSS(Sassy CSS) 표기법

  |              | CSS  | SCSS  |         SASS         |
  | :----------: | :--: | :---: | :------------------: |
  | 중괄호 `{}`  |  O   |   O   | X<br />들여쓰기 사용 |
  | 세미콜론 `;` |  O   |   O   | X<br />개행으로 구분 |
  |    확장자    | .css | .scss |        .sass         |

  > SASS 표기법은 보다 코딩을 간략화할 수 있는 장점이 있지만, CSS 친화적인 SCSS 표기법를 사용하는 경우가 더 많음

# 기능 및 표기법 예시

## 변수의 사용

`&변수명: 값`

원하는 곳 어디에서든 선언 가능

- CSS

  ```css
  .alert {
    border: 1px solid rgba(198, 83, 140, 0.88);
  }
  ```

- SCSS

  ```scss
  $base-color: #c6538c;
  $border-dark: rgba($base-color, 0.88);

  .alert {
    border: 1px solid $border-dark;
  }
  ```

- SASS

  ```scss
  $base-color: #c6538c
  $border-dark: rgba($base-color, 0.88)

  .alert
    border: 1px solid $border-dark
  ```

## Mixin

`@mixin` : 재사용할 속성 캡슐화

`@include` : 포함할 mixin 이름 지정

- CSS

  ```css
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    display: inline-block;
    margin-left: -2px;
    margin-right: 2em;
  }
  ```

- SCSS

  ```scss
  @mixin reset-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @mixin horizontal-list {
    @include reset-list; /* reset-list의 속성을 포함 */

    li {
      display: inline-block;
      margin: {
        left: -2px;
        right: 2em;
      }
    }
  }

  nav ul {
    @include horizontal-list; /* horizontal-list의 속성을 포함 */
  }
  ```

- SASS

  ```scss
  @mixin reset-list margin: 0 padding: 0 list-style: none @mixin horizontal-list
    @include reset-list li display: inline-block margin: left: -2px right: 2em
    nav ul @include horizontal-list;
  ```

# 참고

- [Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)
- [PoiemaWeb](https://poiemaweb.com/sass-basics)
