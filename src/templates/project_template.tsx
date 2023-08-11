import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostHead from 'components/PostHead'
import PostContent from 'components/PostContent.tsx'

import { I_PostItem } from 'etc/types'

interface I_ProjectTemplate {
  location: {
    href: string
  }
  data: {
    allMarkdownRemark: {
      edges: I_PostItem[]
    }
  }
}

export default function ProjectTemplate({
  location: { href },
  data: {
    allMarkdownRemark: { edges },
  },
}: I_ProjectTemplate) {
  const {
    node: {
      frontmatter: {
        page,
        startDate,
        endDate,
        title,
        subTitle,
        categories,
        team,
        link,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
      html,
    },
  } = edges[0]

  return (
    <Layout title={title} description={subTitle} url={href}>
      <PostHead
        page={page}
        startDate={startDate}
        endDate={endDate}
        title={title}
        subTitle={subTitle}
        categories={categories}
        team={team}
        link={link}
        gatsbyImageData={gatsbyImageData}
      />
      <PostContent page={page} html={html} />
    </Layout>
  )
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            page
            startDate(formatString: "YYYY.MM.DD")
            endDate(formatString: "YYYY.MM.DD")
            title
            subTitle
            categories
            team
            link
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
