import React from 'react'

import styled from 'styled-components'

export default function Awards() {
  return (
    <S_Container>
      <S_Title>Awards</S_Title>
      <S_TypeList>
        {AWARDS.map((award, i) =>
          i < AWARDS.length - 1 ? (
            <S_Type key={i}>
              <S_TypeTitle>{award.title}</S_TypeTitle>
              <S_TypeContent>
                <S_ContentWrapper>
                  <span>
                    {award.desc1}
                    <br />
                    {award.desc2}
                  </span>
                  <S_DateWrapper>
                    <span>{award.date}</span>
                    <span>{award.host}</span>
                  </S_DateWrapper>
                </S_ContentWrapper>
              </S_TypeContent>
            </S_Type>
          ) : (
            <S_TypeEnd key={i}>
              <S_TypeTitle>{award.title}</S_TypeTitle>
              <S_TypeContent>
                <S_ContentWrapper>
                  <span>
                    {award.desc1}
                    <br />
                    {award.desc2}
                  </span>
                  <S_DateWrapper>
                    <span>{award.date}</span>
                    <span>{award.host}</span>
                  </S_DateWrapper>
                </S_ContentWrapper>
              </S_TypeContent>
            </S_TypeEnd>
          ),
        )}
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

const S_TypeEnd = styled.li`
  list-style: none;
  border-top: 1px solid ${props => props.theme.colors.tabColor};
  border-bottom: 1px solid ${props => props.theme.colors.tabColor};
  display: flex;
  align-items: center;
  padding: 16px 0;

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const S_Type = styled.li`
  list-style: none;
  border-top: 1px solid ${props => props.theme.colors.tabColor};
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

const AWARDS = [
  {
    title: '우수상',
    desc1: '자율 프로젝트 결선발표회 입상',
    desc2: '삼성 청년 SW 아카데미 자율 프로젝트 결선 발표회 우수팀',
    date: '2022.05.31',
    host: '삼성전자',
  },
  {
    title: '우수상',
    desc1: '자율 프로젝트 기업연계 1등',
    desc2: '삼성 청년 SW 아카데미 자율 프로젝트 우수팀',
    date: '2022.05.27',
    host: '삼성전자',
  },
  {
    title: 'UCC 우수상',
    desc1: '자율 프로젝트 UCC 2등',
    desc2: '삼성 청년 SW 아카데미 자율 프로젝트 UCC 경진대회 우수팀',
    date: '2022.05.27',
    host: '삼성전자',
  },
  {
    title: '표창장 (학장상)',
    desc1: '학업성적 우수 및 품행 단정',
    desc2: '',
    date: '2019.02.21',
    host: '동아대학교',
  },
]
