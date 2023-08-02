import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import styled from 'styled-components'

interface I_ProjectItem {
  title: string
  subTitle: string
  categories: string[]
  startDate: string
  endDate: string
  page: string
  link: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default function ProjectItem({
  title,
  subTitle,
  categories,
  startDate,
  endDate,
  page,
  link,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
}: I_ProjectItem) {
  return (
    <S_Container>
      <Link to={link}>
        <S_Card>
          <S_TitleWrapper>
            <S_Title>{title}</S_Title>
            <S_SubTitle>{subTitle}</S_SubTitle>
          </S_TitleWrapper>
          <S_DateWrapper>
            {startDate} ~ {endDate}
          </S_DateWrapper>
          <S_CategoryList>
            {categories?.map((category, i) => (
              <S_CategoryItem key={i}>{category}</S_CategoryItem>
            ))}
          </S_CategoryList>
          <S_ImageWrapper>
            <GatsbyImage
              image={gatsbyImageData}
              alt=""
              style={{ height: '200px' }}
              objectFit="fill"
            />
          </S_ImageWrapper>
        </S_Card>
      </Link>
    </S_Container>
  )
}

const S_ImageWrapper = styled.div`
  margin: 0 -24px;
  height: 200px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 14px 14px;
  overflow: hidden;
`

const S_DateWrapper = styled.div`
  overflow: hidden;
  height: 19px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.boxTextColor};

  @media ${props => props.theme.device.laptop} {
    font-size: 13px;
    line-height: 19px;
  }
`

const S_SubTitle = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 18px;
  line-height: 20px;

  @media ${props => props.theme.device.laptop} {
    font-size: 14px;
    line-height: 16px;
  }
  @media ${props => props.theme.device.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`

const S_Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;

  @media ${props => props.theme.device.laptop} {
    font-size: 22px;
    line-height: 32px;
  }
  @media ${props => props.theme.device.mobile} {
    font-size: 26px;
    line-height: 36px;
  }
`

const S_TitleWrapper = styled.div`
  height: 80px;

  @media ${props => props.theme.device.laptop} {
    height: 64px;
  }
  @media ${props => props.theme.device.mobile} {
    height: 72px;
  }
`

const S_CategoryItem = styled.li`
  list-style: none;
  height: 18px;
  font-size: 14px;
  line-height: 13px;
  padding: 2px 6px;
  border-radius: 4px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.boxTabColor};
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${props => props.theme.device.laptop} {
    font-size: 13px;
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 12px;
  }
`

const S_CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  height: 37px;
  overflow: hidden;
  margin-bottom: 12px;
`

const S_Card = styled.div`
  padding: 25px 24px 0;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  transition: 0.3s box-shadow;
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 18%);
    transform: translateY(-2px);
  }
  background-color: ${props => props.theme.colors.boxColor};
`

const S_Container = styled.li`
  list-style: none;
  margin-top: 36px;
  width: 100%;
  padding: 0 18px;

  @media ${props => props.theme.device.laptop} {
    padding: 0 15px;
  }
  @media ${props => props.theme.device.tablet} {
    padding: 0 18px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 0;
  }
`
