import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostHead from 'components/PostHead'
import PostContent from 'components/PostContent.tsx'
import CommentWidget from 'components/Comment/index'

import { I_PostItem } from 'etc/types'

interface PostTemplateProps {
  location: {
    href: string
  }
  data: {
    allMarkdownRemark: {
      edges: I_PostItem[]
    }
  }
}

export default function PostTemplate({
  location: { href },
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      frontmatter: { title, page, date, categories, subTitle },
      html,
    },
  } = edges[0]

  return (
    <Layout title={title} description={subTitle} url={href}>
      <PostHead title={title} page={page} date={date} />
      <PostContent html={html} categories={categories} page={page} />
      <CommentWidget />
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
            categories
            date(formatString: "YYYY.MM.DD")
            title
            subTitle
          }
        }
      }
    }
  }
`
