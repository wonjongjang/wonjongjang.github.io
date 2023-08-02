import { MutableRefObject, useState, useRef, useMemo, useEffect } from 'react'

import { I_PostItem } from 'etc/types'

export interface useInfiniteScrollType {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: I_PostItem[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 6

export default function useInfiniteScroll(
  selectedCategory: string,
  posts: I_PostItem[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null)
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<I_PostItem[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: I_PostItem) =>
          selectedCategory !== 'All'
            ? categories?.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.unobserve(entries[0].target)
    })
  }, [])

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}
