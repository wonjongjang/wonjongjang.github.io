---
page: 'study-blog'
categories: ['JavaScript']
date: ''
title: '비동기(Asynchronous)'
summary: '동기와 비동기 차이, 콜백 함수(콜백 헬), promise, async/await'
order: 230
---

자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖고 싱글 스레드 방식으로 동작

> **싱글 스레드(single thread) 방식**
>
> 한 번에 하나의 태스크만 실행 가능
>
> 처리에 시간이 걸리는 태스크를 실행하는 경우 작업 중단(blocking)이 발생

|                           | 설명                                                         |       장점       |       단점       |
| ------------------------- | ------------------------------------------------------------ | :--------------: | :--------------: |
| 동기(synchronous) 처리    | 현재 실행 중인 태스크가 종료할 때까지 다음에 실행할 태스크가 대기하는 방식 |  실행 순서 보장  |  작업 중단 발생  |
| 비동기(asynchronous) 처리 | 현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로 실행하는 방식 | 작업 중단 발생 X | 실행 순서 보장 X |

# 비동기 처리 패턴

## 콜백 함수

비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달

```javascript
// GET 요청을 위한 비동기 함수
const get = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속 처리
      successCallback(JSON.parse(xhr.response));
    } else {
      // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리
      failureCallback(xhr.status);
    }
  };
};

// 서버의 응답에 대한 후속 처리를 위한 콜백 함수를 비동기 함수인 get에 전달
get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error);
```

- 단점

  - 콜백 헬(callback hell)

    콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또다시 비동기 함수를 호출하는 경우

    콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상

    ```javascript
    get('/step1', a => {
      get(`/step2/${a}`, b => {
        get(`/step3/${b}`, c => {
          get(`/step4/${c}`, d => {
            console.log(d);
          });
        });
      });
    });
    ```

  - 에러 처리의 한계

    ```javascript
    try {
      setTimeout(() => { throw new Error('Error!'); }, 1000);
    } catch (e) {
      // 에러를 캐치하지 못함
      console.error('캐치한 에러', e);
    }
    ```

    setTimeout 함수의 콜백 함수가 발생시킨 에러는 catch 블록에서 캐치 X

    그 이유는 setTimeout 함수의 콜백 함수가 실행될 때 setTimeout 함수는 이미 콜 스택에서 제거된 상태이기 때문

    즉, setTimeout 함수의 콜백 함수를 호출한 것이 setTimeout 함수가 아니라는 뜻

    에러는 호출자 방향(콜 스택의 아래 방향)으로 전파

## 프로미스(Promise)

비동기 처리 상태와 처리 결과를 관리하는 객체

Promise 생성자 함수를 new 연산자와 함께 호출하여 프로미스 객체 생성

```javascript
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출
        reject(new Error(xhr.status));
      }
    };
  });
};

// promiseGet 함수는 프로미스를 반환
promiseGet('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Bye!'));
```

- 처리 상태

  | 프로미스의 상태 정보 |                 의미                  |          상태 변경 조건          |
  | :------------------: | :-----------------------------------: | :------------------------------: |
  |       pending        | 비동기 처리가 아직 수행되지 않은 상태 | 프로미스가 생성된 직후 기본 상태 |
  |      fulfilled       |    비동기 처리가 수행된 상태(성공)    |        resolve 함수 호출         |
  |       rejected       |    비동기 처리가 수행된 상태(실패)    |         reject 함수 호출         |

  - 비동기 처리 성공 : resolve 함수를 호출해 프로미스를 fulfilled 상태로 변경

  - 비동기 처리 실패 : reject 함수를 호출해 프로미스를 rejected 상태로 변경

    ⇒ 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정됨

  > **settled 상태**
  >
  > fulfilled 또는 rejected 상태
  >
  > pending이 아닌 비동기 처리가 수행된 상태

- 후속 처리 메서드

  처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출됨

  언제나 프로미스 반환 → 연속적으로 호출 가능 = 프로미스 체이닝(promise chaining)

  후속 처리 메서드의 콜백 함수는 마이크로태스크 큐(microtask queue)에 저장 → 태스크 큐보다 우선순위↑

  - Promise.prototype.then

    두 개의 콜백 함수를 인수로 전달 받음

    ```javascript
    // 첫번 째 콜백 함수는 fulfilled 상태인 경우 호출
    // 콜백 함수의 인수는 프로미스의 비동기 처리 결과
    new Promise(resolve => resolve('fulfilled'))
      .then(v => console.log(v), e => console.error(e)); // fulfilled
    
    // 두번 째 콜백 함수는 rejected 상태인 경우 호출
    // 콜백 함수의 인수는 프로미스의 에러
    new Promise((_, reject) => reject(new Error('rejected')))
      .then(v => console.log(v), e => console.error(e)); // Error: rejected
    ```

  - Promise.prototype.catch

    한 개의 콜백 함수를 인수로 전달 받음

    ```javascript
    // 콜백 함수는 rejected 상태인 경우만 호출
    new Promise((_, reject) => reject(new Error('rejected')))
      .catch(e => console.log(e)); // Error: rejected
    ```

    모든 then 메서드를 호출한 이후에 catch 메서드를 호출하면 비동기 처리에서 발생한 에러(rejected 상태)뿐만 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치

    ⇒ 에러 처리는 then 보단 catch에서 하는 것을 권장

  - Promise.prototype.finally

    한 개의 콜백 함수를 인수로 전달 받음

    프로미스의 성공/실패와 상관없이 무조건 한 번 호출

    ```javascript
    new Promise(() => {})
      .finally(() => console.log('finally')); // finally
    ```

- 장점
  - 후속 처리 메서드를 통해 에러 처리 수월
  - 후속 처리 메서드를 통해 콜백 헬 해결

## async/await

프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현 가능

```javascript
const fetch = require('node-fetch');

async function fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = await fetch(url);
  const todo = await response.json();
  console.log(todo);
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}

fetchTodo();
```

- async 함수

  async 키워드로 정의

  언제나 프로미스 반환

- await 키워드

  프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환

  반드시 async 함수 내부, 프로미스 앞에서 사용

- 장점

  - 제네레이터보다 간단하고 가독성↑
  - 콜백 함수는 불가능한 try ... catch 문을 통해 에러 처리 가능

# 참고

- 이웅모. 「모던 자바스크립트 Deep Dive」. 위키북스. 2020
