import { IGatsbyImageData } from 'gatsby-plugin-image'

// 프로젝트 or 게시글
export interface I_PostItem {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      page: string
      date: string
      startDate: string
      endDate: string
      title: string
      subTitle: string
      categories: string[]
      team: string[]
      link: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    html: string
  }
}

// 카테고리 목록
export interface I_CategoryList {
  page: string
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
