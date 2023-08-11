import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'

import {
  S_FadeInAnimation,
  S_PageDescript,
  S_PageTitle,
  S_Section,
} from 'pages'
import { I_CategoryList, I_PostItem } from 'etc/types'
import Layout from 'components/Layout'
import CategoryList from 'components/CategoryList'
import BlogList from 'components/Blog/BlogList'

interface I_StudyBlog {
  location: {
    pathname: string
    search: string
    href: string
  }
  data: {
    allMarkdownRemark: {
      edges: I_PostItem[]
    }
  }
}

export default function StudyBlog({
  location: { search, href },
  data: {
    allMarkdownRemark: { edges },
  },
}: I_StudyBlog) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  // study-blog에 해당하는 게시물
  const pageEdges = edges.filter(
    edge => edge.node.frontmatter.page === 'study-blog',
  )

  // study-blog에 해당하는 게시물 중 카테고리 별 개수
  const categoryList = useMemo(
    () =>
      pageEdges.reduce(
        (
          list: I_CategoryList['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: I_PostItem,
        ) => {
          categories?.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Layout title="Study Blog" description="개발하면서 남긴 기록" url={href}>
      <S_FadeInAnimation>
        <S_PageTitle>Study Blog</S_PageTitle>
        <S_PageDescript>공부하면서 남긴 기록</S_PageDescript>
      </S_FadeInAnimation>
      <S_Section>
        {/* 카테고리 */}
        <CategoryList
          page={pageEdges[0].node.frontmatter.page}
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        {/* 게시물 목록 */}
        <BlogList selectedCategory={selectedCategory} posts={pageEdges} />
      </S_Section>
    </Layout>
  )
}

export const getBlogList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            page
            categories
            date(formatString: "YYYY.MM.DD")
            title
          }
        }
      }
    }
  }
`
