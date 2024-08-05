---
page: 'study-blog'
categories: ['CSS']
date: ''
title: 'Cascade'
summary: 'Cascade 정의, 중요도(Importance), 명시도(Specificity), 소스 순서(Source order)'
order: 36
---

동일한 요소에 대해 두 개 이상의 CSS 규칙을 적용하는 경우 충돌 발생 → 어떤 CSS 규칙이 적용되는지를 정의하는 방법

- CSS 적용 우선순위

  1. 중요도(Importance)

  2. 명시도(Specificity)
  3. 소스 순서(Source order)

# 중요도(Importance)

CSS가 어디에 선언 되었는지에 대한 우선순위

1. head 요소 내의 style 요소
2. head 요소 내의 style 요소 내의 `@import` 문
3. `<link>` 로 연결된 CSS 파일
4. `<link>` 로 연결된 CSS 파일 내의 `@import` 문
5. 브라우저 디폴트 스타일시트

# 명시도(Specificity)

가중치로 결정

[참고: CSS 명시도 가중치](https://specifishity.com/)

1. !important

2. 인라인 스타일

3. id 선택자

   ```css
   /* The element with id="demo" */
   #demo {
     border: red 2px solid;
   }
   ```

4. class 선택자 / attribute 선택자 / pseudo-class

   ```css
   /* All elements with class="spacious" */
   .spacious {
     margin: 2em;
   }
   
   /* <a> elements with a title attribute */
   a[title] {
     color: purple;
   }
   
   /* pseudo-class */
   :hover {
   	...
   }
   ```

5. type 선택자

   ```css
   /* All <a> elements. */
   a {
     color: red;
   }

6. universal selector

   ```css
   /* Selects all elements */
   * {
     color: green;
   }
   ```

7. 상위 요소에 의해 상속된 속성

# 소스 순서(Source order)

동일한 가중치를 갖는 규칙이 두 개 이상인 경우, CSS 에서 마지막에 오는 규칙이 우선

```html
<h1>This is my heading.</h1>
```

```css
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

![cascade](./img/cascade.png)

# 참고

- [Cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [PoiemaWeb](https://poiemaweb.com/css3-inheritance-cascading)
