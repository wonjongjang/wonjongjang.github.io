// 게시글 본문
import React from 'react'
import { Link } from 'gatsby'
import { useRecoilValue } from 'recoil'

import styled from 'styled-components'
import './md.css'

import { toggleThemeAtom } from 'etc/atoms'

interface I_PostContent {
  html: string
  categories?: string[]
  page: string
}

export default function PostContent({ html, categories, page }: I_PostContent) {
  const isDark = useRecoilValue(toggleThemeAtom)

  return (
    <>
      <S_ContentContainer>
        <S_Content
          dangerouslySetInnerHTML={{ __html: html }}
          className={
            isDark
              ? 'markdown-body markdown-dark'
              : 'markdown-body markdown-light'
          }
        />
      </S_ContentContainer>

      {page === 'project' ? (
        <>
          <S_Prev to={`/project`}>목록 보기</S_Prev>
        </>
      ) : (
        <>
          <S_CategoryContainer>
            <S_CategoryList>
              {categories?.map((categorie, idx) => (
                <S_CategoryItem key={idx}>{categorie}</S_CategoryItem>
              ))}
            </S_CategoryList>
          </S_CategoryContainer>

          <S_Prev to={`/tech-blog`}>목록 보기</S_Prev>
        </>
      )}
    </>
  )
}

const S_Prev = styled(Link)`
  display: block;
  margin: 120px auto 30px;
  width: 180px;
  padding: 13px 24px;
  border-radius: 30px;
  background: ${props => props.theme.colors.tabColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.textColor};
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.bgColor};
    background: ${props => props.theme.colors.selectBoxColor};
  }

  @media ${props => props.theme.device.mobile} {
    width: 150px;
    padding: 10px 9px;
    font-size: 16px;
    line-height: 26px;
  }
`

const S_CategoryItem = styled.div`
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: 34px;
  margin-right: 6px;
  padding: 0 15px;
  border-radius: 34px;
  font-size: 13px;
  line-height: 34px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.tabColor};
  letter-spacing: -0.5px;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const S_CategoryList = styled.div`
  text-align: center;
`

const S_CategoryContainer = styled.div`
  max-width: 816px;
  margin: 110px auto 0;
  padding: 0 24px;

  @media ${props => props.theme.device.laptop} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 364px;
  }
`

const S_Content = styled.div`
  max-width: 816px;
  margin: 84px auto 0;

  @media ${props => props.theme.device.laptop} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 364px;
  }
`

const S_ContentContainer = styled.div`
  max-width: 816px;
  margin: 84px auto 0;

  @media ${props => props.theme.device.laptop} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 364px;
  }
`
