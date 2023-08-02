import React from 'react'
import { Link } from 'gatsby'
import { useRecoilState } from 'recoil'

import styled from 'styled-components'

import { toggleSidebarAtom } from 'etc/atoms'

export default function Sidebar() {
  const [isSidebar, setIsSidebar] = useRecoilState(toggleSidebarAtom)

  return (
    <S_Container isSidebar={isSidebar}>
      <S_CloseIcon onClick={() => setIsSidebar(prev => !prev)}>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </S_CloseIcon>
      {/* <Profile /> */}
      <S_MenuList>
        <Link to="/">
          <S_Menu onClick={() => setIsSidebar(prev => !prev)}>Home</S_Menu>
        </Link>
        <Link to="/project">
          <S_Menu onClick={() => setIsSidebar(prev => !prev)}>Project</S_Menu>
        </Link>
        <Link to="/tech-blog">
          <S_Menu onClick={() => setIsSidebar(prev => !prev)}>Tech Blog</S_Menu>
        </Link>
      </S_MenuList>
    </S_Container>
  )
}

const S_Menu = styled.li`
  font-size: 36px;
  line-height: 52px;
  font-weight: 700;
  letter-spacing: -0.8px;
  list-style: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const S_MenuList = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`

const S_CloseIcon = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const S_Container = styled.div<{ isSidebar: Boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100% - 45px);
  padding: 0 24px;
  background: ${props => props.theme.colors.bgColor};
  transform: ${props =>
    props.isSidebar ? 'translateX(0%)' : 'translateX(200%)'};
  transition: all 0.4s;
  z-index: 3000;
`
