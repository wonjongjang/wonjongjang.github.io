import React from 'react'

import styled from 'styled-components'

export default function History() {
  return (
    <S_Container>
      <S_Title>History</S_Title>
      <S_TypeList>
        {HISTORY.map((h, i) => (
          <S_Type key={i} isEnd={i === HISTORY.length - 1}>
            <S_TypeTitle>{h.co}</S_TypeTitle>
            <S_TypeContent>
              <S_ContentWrapper>
                {h.job ? <S_Description>{h.job}</S_Description> : <div />}
                <S_DateWrapper>
                  <span>{h.date}</span>
                </S_DateWrapper>
              </S_ContentWrapper>
            </S_TypeContent>
          </S_Type>
        ))}
      </S_TypeList>
    </S_Container>
  )
}

const S_DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  color: ${props => props.theme.colors.boxTextColor};
  letter-spacing: -0.2px;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    align-items: center;
  }
  @media ${props => props.theme.device.mobile} {
    font-size: 15px;
  }
`

const S_Description = styled.span`
  width: 750px;

  @media ${props => props.theme.device.laptop} {
    width: 350px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 100%;
  }
`

const S_ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const S_TypeContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`

const S_TypeTitle = styled.div`
  width: 350px;
  font-weight: 500;
  flex-shrink: 0;

  @media ${props => props.theme.device.tablet} {
    width: 250px;
  }
  @media ${props => props.theme.device.mobile} {
    width: 100%;
  }
`

const S_Type = styled.li<{ isEnd: boolean }>`
  list-style: none;
  border-top: 1px solid ${props => props.theme.colors.tabColor};
  border-bottom: ${props =>
    props.isEnd ? `1px solid ${props.theme.colors.tabColor}` : 'none'};
  display: flex;
  align-items: center;
  padding: 16px 0;

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const S_TypeList = styled.ul`
  width: 100%;
`

const S_Title = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.ownColor};
`

const S_Container = styled.div`
  margin-top: 80px;
`

const HISTORY = [
  {
    co: 'HighDev',
    job: 'Developer',
    date: '2023.01.03 ~',
  },
  {
    co: '삼성 청년 SW 아카데미(SSAFY) 6기',
    job: '',
    date: '2021.07.07 ~ 2022.06.30',
  },
  {
    co: 'Famecs',
    job: 'Quality Management',
    date: '2020.10.05 ~ 2021.06.30',
  },
  {
    co: '동아대학교',
    job: 'Industrial & Management Systems Engineering',
    date: '2012.03 ~ 2019.02',
  },
]
