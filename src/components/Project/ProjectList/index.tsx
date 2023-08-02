import React from 'react'

import styled from 'styled-components'

import { I_PostItem } from 'etc/types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import ProjectItem from '../ProjectItem'

interface I_ProjectList {
  posts: I_PostItem[]
  selectedCategory: string
}

export default function ProjectList({
  selectedCategory,
  posts,
}: I_ProjectList) {
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
          <ProjectItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </S_Container>
  )
}

const S_Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${props => props.theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
