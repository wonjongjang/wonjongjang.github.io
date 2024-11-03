---
page: 'study-blog'
categories: ['CSS']
date: ''
title: 'Flexbox'
summary: 'Flexbox 속성'
order: 104
---

행과 열 형태로 항목을 배치하는 일차원 레이아웃 메서드

항목은 부족한 공간에 맞추기 위해 축소되거나 여분의 공간을 채우기 위해 변형됨

영향을 주고 싶은 부모 요소에 `display: flex` 지정

```html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
```

```css
.flex-container {
  display: flex;
}
```

![flex](./img/flex.png)

# Flexbox container 속성

## flex-direction

주축(main axis)의 방향 설정

|       값       |                     |
| :------------: | ------------------- |
|      row       | 기본값<br />좌 → 우 |
|  row-reverse   | 우 → 좌             |
|     column     | 위 → 아래           |
| column-reverse | 아래 → 위           |

## flex-wrap

부모 요소(flex container)가 고정 크기를 갖고 있다면 자식 요소(flex item)가 쌓이면 컨테이너에서 대열이탈하면서 레이아웃이 깨질 수 있음

이탈한 것을 다음 행으로 넘길 지 설정

|      값      |                    |
| :----------: | ------------------ |
|    nowrap    | 기본값<br />개행 X |
|     wrap     | 개행 (위 → 아래)   |
| wrap-reverse | 개행 (아래 → 위)   |

## flex-flow

`flex-direction`과 `flex-wrap`을 설정하기 위한 shorthand

```css
.flex-container {
  /* flex-flow: flex-direction flex-wrap */
  flex-flow: row nowrap; /* 기본값 */
}
```

## justify-content

flex container의 주축(main axis)을 기준으로 flex item을 수평 정렬

|      값       |                                                                                |
| :-----------: | ------------------------------------------------------------------------------ |
|  flex-start   | 기본값<br />main start 기준으로 정렬                                           |
|   flex-end    | main end 기준으로 정렬                                                         |
|    center     | 중앙에 정렬                                                                    |
| space-between | 첫번째와 마지막 flex item은 좌우 측면에 정렬되고 나머지와 균등한 간격으로 정렬 |
| space-around  | 균등한 간격으로 정렬                                                           |

## align-items

flex item을 flex container의 수직 방향(cross axis)으로 정렬

|     값     |                                                                               |
| :--------: | ----------------------------------------------------------------------------- |
|  stretch   | 기본값<br />flex container의 높이(cross start ~ cross end)에 꽉찬 높이를 가짐 |
| flex-start | cross start 기준으로 정렬                                                     |
|  flex-end  | cross end 기준으로 정렬                                                       |
|   center   | 중앙에 정렬                                                                   |
|  baseline  | flex container의 baseline을 기준으로 정렬                                     |

# 참고

- [Flexbox playground](https://codepen.io/enxaneta/pen/adLPwv)
- [Flexbox - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [PoiemaWeb](https://poiemaweb.com/css3-flexbox)

