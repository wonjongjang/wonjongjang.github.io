---
page: 'study-blog'
categories: ['React']
date: ''
title: 'Hooks'
summary: 'Hooks 정의 및 규칙, useState, useEffect, useLayoutEffect, useMemo, useCallback'
order: 308
---

use로 시작하는 함수

호출 위치에 제약이 있는 특별한 유형의 재사용 가능한 UI 로직

- 규칙

  - 최상위 레벨에서만 호출

    ```jsx
    function Counter() {
      // ✅ 함수 컴포넌트의 최상위 레벨에서 사용
      const [count, setCount] = useState(0);
      // ...
    }
    
    function useWindowWidth() {
      // ✅ 커스텀 Hook의 최상위 레벨에서 사용
      const [width, setWidth] = useState(window.innerWidth);
      // ...
    }
    ```

    조건문, 반복문, return 문 이후, 이벤트 핸들러, 클래스 컴포넌트, 중첩 함수, try/catch/finally 블록 내부에서 호출 X

  - React 함수에서만 호출

    일반 함수에서 호출 X

# State Hooks

컴포넌트가 사용자 입력과 같은 정보 기억 가능

## useState

컴포넌트에 state 변수 추가

```jsx
const [state, setState] = useState(initialState)
```

- 배열 구조 분해를 통해 변수 이름 지정

- set 함수는 다음 렌더링에 대한 state 변수만 업데이트

  ```jsx
  const [name, setName] = useState('Taylor');
  
  function handleClick() {
    setName('Robin');
    console.log(name); // 아직 "Taylor"입니다!
  }
  ```

  state가 스냅샷처럼 동작하기 때문에 이미 실행 중인 코드의 state는 변경되지 않음

- 최적화

  state 변경 시 이전 값과 동일한 경우 리렌더링 X

  `Object.is()`를 통해 비교

# Context Hooks

멀리 있는 부모 컴포넌트로부터 props로 전달하지 않으면서 정보를 받을 수 있음

## useContext

컴포넌트에서 context를 읽고 구독 가능

```jsx
const value = useContext(SomeContext)
```

- 매개변수

  - SomeContext : `createContext()`로 생성한 context

- `useContext()`를 호출한 컴포넌트의 상위에서 가장 가까운 `<Context.Provider>`를 찾아 context 값을 결정 (호출한 컴포넌트 내부의 Provider는 고려 X)

  ```jsx
  import { createContext, useContext } from 'react';
  
  const ThemeContext = createContext(null); // 컨텍스트 생성
  
  export default function MyApp() {
    const [theme, setTheme] = useState('dark');
    
    return (
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
    )
  }
  
  function Form() {
    return (
        <Button>Sign up</Button>
    );
  }
  
  function Button({ children }) {
    const theme = useContext(ThemeContext); // Provider에서 전달한 dark가 값으로 결정됨
  
    return (
      <button>
        {children}
      </button>
    );
  }
  ```

- context 값을 변경하면 해당 context를 사용하는 모든 컴포넌트가 리렌더링

# Effect Hooks

컴포넌트를 외부 시스템에 연결하고 동기화 가능

> **외부 시스템(extenal)**
>
> React에 의해 제어되지 않는 모든 코드
>
> ex) 네트워크, 브라우저 DOM, 애니메이션, 다른 UI 라이브러리를 사용하여 작성된 위젯, 기타 React가 아닌 코드

## useEffect

컴포넌트를 외부 시스템과 동기화

```jsx
useEffect(setup, dependencies?)
```

- 매개변수

  - setup
    - 설정 함수 : 외부 시스템과 연결하는 설정 코드가 포함된 함수
    - 정리(clean up) 함수 : 외부 시스템과 연결을 해제하는 정리 코드가 포함된 함수

  - dependencies

    |      설정 방식      |                             동작                             |                예시                 |
    | :-----------------: | :----------------------------------------------------------: | :---------------------------------: |
    | 의존성 배열 전달 X  |                 모든 렌더링/리렌더링 시 실행                 |     `useEffect(() => { ... });`     |
    | 빈 의존성 배열 전달 |                  초기 렌더링 시 한 번 실행                   |   `useEffect(() => { ... }, []);`   |
    |  의존성 배열 전달   | 초기 렌더링과 의존성 값 변경 시 실행<br />`Object.is()`를 통해 비교 | `useEffect(() => { ... }, [a, b]);` |

- 작동 방식
  1. 초기 렌더링 시 설정 코드 동작
  2. 의존성 값 변경 시 아래 동작 수행
     - 정리 코드가 이전의 props/state와 함께 실행
     - 이후, 설정 코드가 새로운 props/state와 함께 실행
  3. 컴포넌트가 화면에서 제거된 후 정리 코드 실행
- 외부 시스템과 연결할 필요 없다면 Effect 사용할 필요 없을 수 있음
- Effect 내부에서 데이터 페칭하는 것은 인기 있는 방법이지만, 네트워크 폭포 효과 등 단점이 존재 ⇒ 오픈소스 솔루션(React Query, useSWR 등) 사용 고려

## useLayoutEffect

브라우저가 화면을 다시 그리기 전에 실행되는 useEffect

```jsx
useLayoutEffect(setup, dependencies?)
```

- 작동 방식

  ```jsx
  // 툴팁 예시
  function Tooltip() {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0); // 아직 실제 높이 모름
  
    useLayoutEffect(() => {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height); // 실제 높이를 알았으니 다시 렌더링
    }, []);
  
    // ...아래에 올 렌더링 로직에서 tooltipHeight를 사용...
  }
  ```

  1. Tooltip은 초기화된 값인 tooltipHeight = 0으로 렌더링 (툴팁이 잘못된 위치에 있을 수 있음)
  2. React가 이 툴팁을 DOM에 배치하고 useLayoutEffect 안의 코드를 실행
  3. 툴팁의 높이를 계산하고 바로 다시 렌더링
  4. Tooltip이 실제 높이 값을 가진 tooltipHeight로 렌더링 (따라서 툴팁이 올바른 위치에 배치)
  5. React가 DOM에서 이를 업데이트하고 브라우저가 툴팁을 표시

- 두 번의 렌더링과 브라우저를 막는 것 → 성능 저하 ⇒ useEffect 사용 권장

# Performance Hooks

리렌더링 성능 최적화 → 불필요한 작업을 건너뛰는 것 ⇒ memoization (캐싱)

> **memoization**
>
> 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술

## useMemo

리렌더링 간에 계산 결과를 캐싱

호출한 함수의 결과값을 캐싱

```jsx
const cachedValue = useMemo(calculateValue, dependencies)
```

- 매개변수
  - calculateValue : 캐싱하려는 값을 계산하는 함수

- 작동 방식

  1. 초기 렌더링에서 calculateValue를 호출한 결과 반환
  2. 이후 모든 렌더링
     - dependencies 변경된 경우 : calculateValue를 다시 호출하고 반환된 값 저장
     - dependencies 변경되지 않은 경우 : 마지막 렌더링에서 저장된 값 반환

- React는 캐싱된 값을 버려야 할 특별한 이유가 없으면 버리지 않음

- 코드에 소요된 시간 측정 방법

  ```jsx
  console.time('filter array');
  const visibleTodos = filterTodos(todos, tab);
  console.timeEnd('filter array');
  ```

  1ms 이상인 경우 메모하는 것이 좋음

  네트워크 스로틀링을 통해 성능 테스트를 하는 것이 좋음 (Chrome 옵션 제공)

  > **네트워크 스로틀링(Network throttling)**
  >
  > 의도적으로 인터넷 속도를 늦추는 것
  >
  > 낮은 대역폭 상태를 에뮬레이션하는 데 사용

  개발 환경에선 가장 정확한 결과가 아닐 수 있음

- 메모이제이션이 유용한 경우

  - 계산이 눈에 띄게 느리고 의존성이 거의 변경되지 않는 경우

  - 의존성이 동일하지 않은 경우에만 컴포넌트를 다시 렌더링하고 싶은 경우 ⇒ memo 사용

    > **memo**
    >
    > 컴포넌트의 props가 변경되지 않은 경우 리렌더링을 건너뛸 수 있음
    >
    > 부모 컴포넌트가 리렌더링 되어도 props가 변경되지 않았다면 리렌더링 X
    >
    > ```jsx
    > const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
    > ```
    >
    > - 성능을 최적화하는 것이지 보장하지 않기 때문에 리렌더링 가능성 존재

  - 계산한 결과값을 나중에 어떤 Hook의 의존성으로 사용할 경우

## useCallback

리렌더링 간에 함수 정의를 캐싱

함수 자체를 캐싱

```jsx
const cachedFn = useCallback(fn, dependencies)
```

- 매개변수
  - fn : 캐싱할 함수

- 작동 방식
  1. 초기 렌더링에서 전달한 fn 함수 그대로 반환
  2. 이후 모든 렌더링
     - dependencies 변경된 경우 : 현재 렌더링 중에 전달한 fn 함수 반환
     - dependencies 변경되지 않은 경우 : 마지막 렌더링에서 저장된 fn 함수 반환

# 참고

- [Built-in React Hooks – React](https://react.dev/reference/react/hooks)
- [메모이제이션 - 위키백과, 우리 모두의 백과사전](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98)
- [Network throttling - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Network_throttling)
