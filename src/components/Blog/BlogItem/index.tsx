import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

interface I_BlogItem {
  title: string
  date: string
  categories: string[]
  page: string
  link: string
}

export default function BlogItem({
  title,
  date,
  categories,
  page,
  link,
}: I_BlogItem) {
  return (
    <S_Container to={link}>
      <S_CategoryList>
        {categories?.map(category => (
          <S_CategoryItem key={category}>{category}</S_CategoryItem>
        ))}
      </S_CategoryList>
      <S_Title>{title}</S_Title>
      <S_Date>{date}</S_Date>
    </S_Container>
  )
}

const S_Date = styled.div`
  font-size: 13px;
  line-height: 19px;
  font-weight: 300;
`

const S_Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  margin-top: 13px;
`

const S_CategoryItem = styled.li`
  height: 34px;
  padding: 0 15px;
  border-radius: 34px;
  font-size: 13px;
  line-height: 34px;
  background-color: ${props => props.theme.colors.boxTabColor};
  list-style: none;
`

const S_CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const S_Container = styled(Link)`
  border-radius: 14px;
  cursor: pointer;
  padding: 25px 24px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  transition: 0.3s box-shadow;
  background-color: ${props => props.theme.colors.boxColor};
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 18%);
    transform: translateY(-2px);
  }
`
