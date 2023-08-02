import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import { I_CategoryList } from 'etc/types'

interface I_Active {
  active: boolean
}

interface I_Link {
  children: ReactNode
  className?: string
  to: string
  active: boolean
}

export default function CategoryList({
  page,
  selectedCategory,
  categoryList,
}: I_CategoryList) {
  return (
    <S_Container>
      {Object.entries(categoryList).map(([name, count]) => (
        <S_CategoryItem
          to={`/${page}/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </S_CategoryItem>
      ))}
    </S_Container>
  )
}

const S_CategoryItem = styled(({ active, ...props }: I_Link) => (
  <Link {...props} />
))<I_Active>`
  margin-right: 10px;
  height: 44px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 43px;
  border-radius: 30px;
  letter-spacing: -0.5px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.bgColor};
    background: ${props => props.theme.colors.selectBoxColor};
  }
  color: ${props =>
    props.active ? props.theme.colors.bgColor : props.theme.colors.textColor};
  background: ${props =>
    props.active
      ? props.theme.colors.selectBoxColor
      : props.theme.colors.tabColor};

  @media ${props => props.theme.device.tablet} {
    height: 37px;
    padding: 0 17px;
    font-size: 14px;
    line-height: 37px;
  }
`

const S_Container = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.subTextColor};
    border-radius: 6px;
  }
`
