/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Won's Blog`,
    description: `개발자로써 쌓아온 역량과 프로젝트, 그리고 블로그를 볼 수 있습니다.`,
    author: `장원종 Wonjong Jang`,
    siteUrl: `https://wonjongjang.github.io`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-gatsby-cloud',
    //   options: {
    //     // Add the "DEV_SSR" flag here
    //     flags: {
    //       DEV_SSR: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Sans+KR\:100,300,400,500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      // 중복된 페이지 중에서 가장 대표적으로 사용되는 URL을 알려주는 역할
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://wonjongjang.github.io/',
        stripQueryString: true,
      },
    },
    {
      // 특정 검색 로봇으로 하여금 크롤링을 허용하는 페이지와 허용하지 않는 페이지를 지정
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // 'gatsby-plugin-sitemap', // 사용자들이 방문할 수 있는 페이지의 목록 (검색 엔진에 노출되었으면 하는 페이지만을 Sitemap에 추가해 크롤링 속도를 개선)
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
  ],
}
