import React from 'react'
import { Link } from 'gatsby'
import { useRecoilState, useSetRecoilState } from 'recoil'

import styled from 'styled-components'

import { toggleSidebarAtom, toggleThemeAtom } from 'etc/atoms'

export default function Header() {
  const [isDark, setIsDark] = useRecoilState(toggleThemeAtom)
  const setIsSidebar = useSetRecoilState(toggleSidebarAtom)

  return (
    <S_HeaderContainer>
      <S_HeaderContainerList>
        <Link to="/">
          <S_Home>won</S_Home>
        </Link>
        <S_MenuList>
          <Link
            to="/project"
            activeStyle={{ color: '#00a8ff' }}
            partiallyActive={true}
          >
            <S_Menu>Project</S_Menu>
          </Link>
          <Link
            to="/tech-blog"
            activeStyle={{ color: '#00a8ff' }}
            partiallyActive={true}
          >
            <S_Menu>Tech Blog</S_Menu>
          </Link>
          {/* <Link
            to="/blog"
            activeStyle={{ color: '#00a8ff' }}
            partiallyActive={true}
          >
            <S_Menu>Blog</S_Menu>
          </Link> */}
        </S_MenuList>
        <S_S_IconList>
          <S_Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </S_Icon>
          <S_Icon onClick={() => setIsDark(prev => !prev)}>
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </S_Icon>
          <S_SidebarIcon onClick={() => setIsSidebar(prev => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </S_SidebarIcon>
        </S_S_IconList>
      </S_HeaderContainerList>
    </S_HeaderContainer>
  )
}

const S_SidebarIcon = styled.li`
  display: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  list-style: none;
  &:hover {
    opacity: 0.5;
  }

  @media ${props => props.theme.device.tablet} {
    display: block;
    width: 28px;
    height: 28px;
  }
`

const S_Icon = styled.li`
  width: 24px;
  height: 24px;
  cursor: pointer;
  list-style: none;
  &:hover {
    opacity: 0.5;
  }

  @media ${props => props.theme.device.tablet} {
    width: 28px;
    height: 28px;
  }
`

const S_S_IconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`

const S_Menu = styled.span`
  line-height: 72px;
  font-weight: 700;
  padding: 0 28px;
  &:hover {
    opacity: 0.5;
  }

  @media ${props => props.theme.device.tablet} {
    line-height: 60px;
  }
`

const S_MenuList = styled.ul`
  display: flex;

  @media ${props => props.theme.device.tablet} {
    display: none;
  }
`

const S_Home = styled.span`
  width: 66px;
  font-size: 28px;
  line-height: 72px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media ${props => props.theme.device.tablet} {
    line-height: 60px;
  }
`

const S_HeaderContainerList = styled.div`
  max-width: 1296px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.device.laptop} {
    height: 72px;
    max-width: 952px;
  }
  @media ${props => props.theme.device.tablet} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 412px;
    padding: 0 24px;
  }
`

const S_HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2000;
  background-color: ${props => props.theme.colors.bgColor};
`
