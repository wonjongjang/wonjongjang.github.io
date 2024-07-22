// 게시글 상단
import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import styled from 'styled-components'

interface I_PostHead {
  page: string
  date?: string
  startDate?: string
  endDate?: string
  title: string
  subTitle?: string
  categories?: string[]
  team?: string[]
  link?: string[]
  gatsbyImageData?: IGatsbyImageData
}

export default function PostHead({
  page,
  title,
  subTitle,
  date,
  startDate,
  endDate,
  categories,
  team,
  link,
  gatsbyImageData,
}: I_PostHead) {
  return (
    <>
      {page === 'project' ? (
        <S_PostHeadContainer>
          <S_ImageWrapper>
            {gatsbyImageData && (
              <GatsbyImage
                image={gatsbyImageData}
                alt=""
                style={{ height: '200px' }}
                objectFit="contain"
              />
            )}
          </S_ImageWrapper>
          <S_InfoContainer>
            <S_DateWrapper>
              <S_Date>
                {startDate} ~ {endDate}
              </S_Date>
            </S_DateWrapper>
            <S_TitleWrapper>{title}</S_TitleWrapper>
            <span>{subTitle}</span>
            <S_CategoryList>
              {categories?.map((v, i) => (
                <S_Category key={i}>{v}</S_Category>
              ))}
            </S_CategoryList>
            <S_TeamWrapper>
              <S_Role>{team && team[0].slice(0, -1)}</S_Role>
              <S_Line>|</S_Line>
              <S_TeamList>
                {team?.map((v, i) => (
                  <span key={i}>{v}</span>
                ))}
              </S_TeamList>
            </S_TeamWrapper>
            <S_LinkContainer>
              {link && link[0] && (
                <S_LinkIcon
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => window.open(link[0])}
                >
                  <path
                    d="M12 4.92893L9.17158 7.75736L10.5858 9.17157L13.4142 6.34315C14.5809 5.17642 16.4901 5.17642 17.6569 6.34315C18.8236 7.50987 18.8236 9.41906 17.6569 10.5858L14.8284 13.4142L16.2426 14.8284L19.0711 12C21.0227 10.0484 21.0227 6.88055 19.0711 4.92893C17.1195 2.97732 13.9516 2.97732 12 4.92893ZM13.4142 14.8284L10.5858 17.6569C9.41906 18.8236 7.50988 18.8236 6.34315 17.6569C5.17642 16.4901 5.17642 14.5809 6.34315 13.4142L9.17158 10.5858L7.75736 9.17157L4.92894 12C2.97732 13.9516 2.97732 17.1195 4.92894 19.0711C6.88055 21.0227 10.0484 21.0227 12 19.0711L14.8284 16.2426L13.4142 14.8284ZM8.46447 14.1213L14.1213 8.46447L15.5355 9.87868L9.87868 15.5355L8.46447 14.1213ZM12 4.92893L9.17158 7.75736L10.5858 9.17157L13.4142 6.34315C14.5809 5.17642 16.4901 5.17642 17.6569 6.34315C18.8236 7.50987 18.8236 9.41906 17.6569 10.5858L14.8284 13.4142L16.2426 14.8284L19.0711 12C21.0227 10.0484 21.0227 6.88055 19.0711 4.92893C17.1195 2.97732 13.9516 2.97732 12 4.92893ZM13.4142 14.8284L10.5858 17.6569C9.41906 18.8236 7.50988 18.8236 6.34315 17.6569C5.17642 16.4901 5.17642 14.5809 6.34315 13.4142L9.17158 10.5858L7.75736 9.17157L4.92894 12C2.97732 13.9516 2.97732 17.1195 4.92894 19.0711C6.88055 21.0227 10.0484 21.0227 12 19.0711L14.8284 16.2426L13.4142 14.8284ZM8.46447 14.1213L14.1213 8.46447L15.5355 9.87868L9.87868 15.5355L8.46447 14.1213Z"
                    fill="currentColor"
                  />
                </S_LinkIcon>
              )}
              {link && link[1] && (
                <S_Icon
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => window.open(link[1])}
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </S_Icon>
              )}
            </S_LinkContainer>
          </S_InfoContainer>
        </S_PostHeadContainer>
      ) : (
        <S_PostHeadContainer>
          {/* <S_DateWrapper>
            <S_Date>{date}</S_Date>
          </S_DateWrapper> */}
          <S_TitleWrapper>{title}</S_TitleWrapper>
        </S_PostHeadContainer>
      )}
    </>
  )
}

const S_Icon = styled.svg`
  width: 36px;
  height: 36px;
  color: ${props => props.theme.colors.textColor};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`

const S_LinkIcon = styled.svg`
  width: 36px;
  height: 36px;
  color: ${props => props.theme.colors.subTextColor};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`

const S_LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 48px;
`

const S_TeamList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

const S_Line = styled.p`
  color: rgb(93, 98, 103);
`

const S_Role = styled.div`
  color: ${props => props.theme.colors.ownColor};
`

const S_TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 14px;

  @media ${props => props.theme.device.mobile} {
    font-size: 12px;
  }
`

const S_Category = styled.li`
  list-style: none;
  font-size: 14px;
  line-height: 1.5;
  padding: 2px 6px;
  border-radius: 4px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.tabColor};
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${props => props.theme.device.mobile} {
    font-size: 12px;
  }
`

const S_CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 24px 0 8px;
`

const S_ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.colors.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const S_TitleWrapper = styled.p`
  margin-top: 24px;
  font-size: 46px;
  line-height: 1.3;
  letter-spacing: -1px;
  font-weight: 700;

  @media ${props => props.theme.device.laptop} {
    font-size: 42px;
    line-height: 1.29;
    letter-spacing: -0.8px;
  }
  @media ${props => props.theme.device.mobile} {
    margin-top: 12px;
    font-size: 32px;
    line-height: 1.38;
  }
`

const S_Date = styled.span`
  font-size: 18px;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.postDateColor};

  @media ${props => props.theme.device.mobile} {
    font-size: 13px;
    letter-spacing: -0.2px;
  }
`

const S_DateWrapper = styled.div`
  line-height: 20px;
`

const S_InfoContainer = styled.div`
  margin-top: 48px;
`

const S_PostHeadContainer = styled.div`
  max-width: 816px;
  padding: 0;
  margin: 0 auto;
  text-align: center;

  @media ${props => props.theme.device.laptop} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 364px;
  }
`
