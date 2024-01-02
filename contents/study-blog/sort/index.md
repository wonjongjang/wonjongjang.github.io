---
page: 'study-blog'
categories: ['Software-Development']
date: '2023-04-12'
title: '정렬(Sort)'
summary: '정렬(Sort)의 정의, 종류'
---

2개 이상의 자료를 특정 기준에 의해 오름차순/내림차순으로 재배열하는 것

| 알고리즘   | 평균 수행시간        | 최악 수행시간        | 알고리즘 기법 |
|:------:|:--------------:|:--------------:|:-------:|
| 버블 정렬  | $O(n^2)$       | $O(n^2)$       | 비교와 교환  |
| 카운팅 정렬 | $O(n + k)$     | $O(n + k)$     | 비교환 방식  |
| 선택 정렬  | $O(n^2)$       | $O(n^2)$       | 비교와 교환  |
| 퀵 정렬   | $O(n log n)$   | $O(n^2)$       | 분할 정복   |
| 삽입 정렬  | $O(n^2)$       | $O(n^2)$       | 비교와 교환  |
| 쉘 정렬   | $O(n^{1.5})$   | $O(n^2)$       | 비교와 교환  |
| 힙 정렬   | $O(n log_2 n)$ | $O(n log_2 n)$ | 전이진 트리  |
| 병합 정렬  | $O(n log_2 n)$ | $O(n log_2 n)$ | 분할 정복   |
| 기수 정렬  | $O(dn)$        | $O(dn)$        | Queue   |

# 버블 정렬(Bubble Sort)

인접한 두 개의 요소를 비교하여 위치를 서로 교환하는 방식

- 특징
  - 첫 번째 원소부터 인접한 원소끼리 계속 자리를 교환하면서 맨 마지막 자리까지 이동
  - 한 단계가 끝나면 가장 큰 원소/가장 작은 원소가 마지막 자리로 정렬됨
  - 교환하며 자리를 이동하는 모습이 물 위에 올라오는 거품모양 같아서 버블 정렬이라고 함

```python
arr = [...]

for i in range(len(arr)-1, 0, -1):	# 범위의 끝 위치
    for j in range(0, i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
```

# 카운팅 정렬(Counting Sort)

각 요소가 몇 개씩 있는지 세는 방식

- 특징
  
  - 정수/정수로 표현할 수 있는 자료에 대해서만 적용 가능 (각 항목의 발생 회수를 기록하기 위해, 정수 항목으로 인덱스되는 카운트의 리스트를 사용하기 때문)
  
  - 카운트를 위한 충분한 공간을 할당하려면 집합 내의 가장 큰 정수를 알아야 함

```python
arr = [...]				# 리스트 요소 (0 ~ k)
ans = [0] * len(arr)	# 정렬된 리스트
count = [0] * (k+1)		# 카운트 리스트

for i in range(len(ans)):
    count[arr[i]] += 1

for j in range(1, len(count)):
    count[j] += count[j-1]

for k in range(len(ans)-1, -1, -1):
    ans[count[arr[k]]-1] = arr[k]
    count[arr[k]] -= 1
```

# 선택 정렬(Selection Sort)

요소 중 최소값을 찾아 앞에서 부터 놓는 방식

```python
arr = [...]

for i in range(len(arr)-1):
    min = i
    for j in range(i+1, len(arr)):
        if arr[min] > arr[j]:
            min = j
    arr[i], arr[min] = arr[min], arr[i]

# [셀렉션 알고리즘 - k번째로 작은 원소]
arr[k-1]
```

# 퀵 정렬(Quick Sort)

키를 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 분해시키는 방식

- 과정
  
  - 분할(Divide) : 피봇(Pivot)을 중심으로 2개의 부분집합으로 나눔
  
  - 정복(Conquer) : 피봇(Pivot)을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 정렬

# 삽입 정렬(Insertion Sort)

n번째 요소를 n-1번째 요소와 비교하여 알맞은 순서에 삽입한 후 나머지를 뒤로 이동시키는 방식

# 쉘 정렬(Shell Sort)

삽입 정렬을 확장한 개념

매개변수(h) 만큼 떨어진 곳을 비교하여 삽입 정렬 하는 방식

보통 $h = \sqrt[3]{n}$

# 힙 정렬(Heap Sort)

전이진 트리(Complete Binary Tree)를 이용한 방식

# 병합 정렬(Merge Sort) = 2-Way 합병 정렬

두 개를 하나로 합병하는 방식

# 기수 정렬(Radix Sort) = Bucket Sort

Queue를 활용하여 자릿수 별로 정렬하는 방식
