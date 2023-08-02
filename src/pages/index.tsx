import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import Layout from 'components/Layout'
import Skill from 'components/Main/Skill'
// import History from 'components/Main/History'
import Certificate from 'components/Main/Certificate'
import Awards from 'components/Main/Awards'

interface I_Home {
  // location: {
  //   search: string
  // }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
  }
}

export default function Home({
  // location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  },
}: I_Home) {
  return (
    <Layout title={title} description={description} url={siteUrl}>
      <S_FadeInAnimation>
        <S_PageTitle>I'm Wonjong Jang,</S_PageTitle>
        <S_PageTitle>a Frontend Developer.</S_PageTitle>
        <S_PageDescript>프론트엔드 개발자 장원종입니다.</S_PageDescript>
      </S_FadeInAnimation>

      <Skill />
      {/* <History /> */}
      <Certificate />
      <Awards />
    </Layout>
  )
}

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

export const S_Section = styled.div`
  margin-top: 72px;

  @media ${props => props.theme.device.tablet} {
    font-size: 48px;
  }
`

export const S_PageDescript = styled.p`
  margin-top: 4px;
  font-size: 28px;
  font-weight: 400;
  color: ${props => props.theme.colors.subTextColor};

  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
  }
`

export const S_PageTitle = styled.p`
  font-size: 36px;
  font-weight: 700;

  @media ${props => props.theme.device.tablet} {
    font-size: 30px;
  }
`

export const S_FadeInAnimation = styled.div`
  @keyframes moving {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: moving;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
`
