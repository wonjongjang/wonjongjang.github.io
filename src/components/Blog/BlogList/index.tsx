import React from 'react'

import styled from 'styled-components'

import { I_PostItem } from 'etc/types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import BlogItem from 'components/Blog/BlogItem'

interface I_BlogList {
  selectedCategory: string
  posts: I_PostItem[]
}

export default function BlogList({ selectedCategory, posts }: I_BlogList) {
  // const postListData = useMemo(
  //   () =>
  //     posts.filter(
  //       ({
  //         node: {
  //           frontmatter: { categories },
  //         },
  //       }: PostListItemType) =>
  //         selectedCategory !== 'All'
  //           ? categories.includes(selectedCategory)
  //           : true,
  //     ),
  //   [selectedCategory],
  // )

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <S_Container ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: I_PostItem) => (
          <BlogItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </S_Container>
  )
}

const S_Container = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media ${props => props.theme.device.tablet} {
    margin-top: 36px;
  }
`
