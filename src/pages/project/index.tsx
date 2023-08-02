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
import CategoryList from 'components/CategoryList'
import Layout from 'components/Layout'
import ProjectList from 'components/Project/ProjectList'

interface I_Project {
  location: {
    search: string
    href: string
  }
  data: {
    allMarkdownRemark: {
      edges: I_PostItem[]
    }
  }
}

export default function Project({
  location: { search, href },
  data: {
    allMarkdownRemark: { edges },
  },
}: I_Project) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  // project에 해당하는 게시물
  const pageEdges = edges.filter(
    edge => edge.node.frontmatter.page === 'project',
  )

  // project에 해당하는 게시물 중 카테고리 별 개수
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
    <Layout title="Project" description="작업한 프로젝트" url={href}>
      <S_FadeInAnimation>
        <S_PageTitle>Project</S_PageTitle>
        <S_PageDescript>작업한 프로젝트</S_PageDescript>
      </S_FadeInAnimation>
      <S_Section>
        {/* 카테고리 */}
        <CategoryList
          page={pageEdges[0].node.frontmatter.page}
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        {/* 프로젝트 목록 */}
        <ProjectList selectedCategory={selectedCategory} posts={pageEdges} />
      </S_Section>
    </Layout>
  )
}

export const getProjectList = graphql`
  query getProjectList {
    allMarkdownRemark(
      sort: {
        order: DESC
        fields: [frontmatter___startDate, frontmatter___title]
      }
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
            startDate(formatString: "YYYY.MM.DD")
            endDate(formatString: "YYYY.MM.DD")
            title
            subTitle
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
