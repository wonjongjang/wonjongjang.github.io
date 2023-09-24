---
page: 'study-blog'
categories: ['Software-Development']
date: '2023-04-13'
title: '검색(Search)'
summary: '검색(Search)의 정의, 종류'
---

# 검색(Search)

저장되어 있는 자료 중에서 원하는 항목을 찾는 작업

## 순차 검색(Sequential Search)

일렬로 되어 있는 자료를 순서대로 검색하는 방법

$O(n)$

- 특징
  
  - 리스트/연결 리스트 등 순차구조로 구현된 자료구조에서 유용

- 장점
  
  - 구현이 쉬움

- 단점
  
  - 검색 대상이 많은 경우 수행시간 ↑ → 비효율적

```python
arr = [...]
key = ★

# [정렬되지 않은 경우]
for i in range(len(arr)):
    if arr[i] == key:	# 발견
        break
        
# [정렬된 경우]    
for i in range(len(arr)):
    if arr[i] == key:	# 검색 성공
        break
    if arr[i] > key:	# 검색 실패
        break
```

## 이분 검색(Binary Search) = 이진 검색

자료의 가운데 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속하는 방법

$O(log n)$

- 특징
  
  - 검색 범위의 시작점과 종료점을 이용하여 검색을 반복 수행
  
  - 항상 정렬된 상태의 자료 필요 (자료 삽입/삭제 시 정렬 상태로 유지하는 추가 작업 필요)

- 장점
  
  - 효율적
  - 빠름

```python
arr = [...]
key = ★

# [while]
left = 0
right = len(arr) - 1
while left <= right:
    mid = (left + right) // 2
    if mid == key:	# 검색 성공
        break
    elif mid > key:
        right = mid - 1
    else:
        left = mid + 1
        
# [재귀]
def recur(arr, l, r, k):
    if l > r:		# 검색 실패
        return
    else:
        mid = (l + r) // 2
        if arr[mid] == k:	# 검색 성공
            return
        elif arr[mid] > k:
            recur(arr, l, mid-1, k)
        else:
            recur(arr, mid+1, r, k)

left = 0
right = len(arr) - 1

recur(arr, left, right, key)
```

## 해싱(Hashing)

해시 테이블(Hash Table)이라는 기억공간을 할당하고, 해시 함수(Hash Function)를 이용하여 레코드 키에 대한 해시 테이블 내의 홈 주소를 계산한 후 주어진 레코드를 해당 기억장소에 저장/검색 작업을 수행하는 방식
