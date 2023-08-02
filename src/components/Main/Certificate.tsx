import React from 'react'

import styled from 'styled-components'

export default function Certificate() {
  return (
    <S_Container>
      <S_Title>Certificate</S_Title>
      <S_TypeList>
        {CERTIFICATE.map((c, i) =>
          i < CERTIFICATE.length - 1 ? (
            <S_Type key={i}>
              <S_TypeTitle>{c.title}</S_TypeTitle>
              <S_TypeContent>
                <S_ContentWrapper>
                  {c.desc1 ? (
                    <S_Description>
                      {c.desc1}
                      <br />
                      {c.desc2}
                    </S_Description>
                  ) : (
                    <div />
                  )}
                  <S_DateWrapper>
                    <span>{c.date}</span>
                    <span>{c.host}</span>
                  </S_DateWrapper>
                </S_ContentWrapper>
              </S_TypeContent>
            </S_Type>
          ) : (
            <S_TypeEnd key={i}>
              <S_TypeTitle>{c.title}</S_TypeTitle>
              <S_TypeContent>
                <S_ContentWrapper>
                  {c.desc1 ? (
                    <S_Description>
                      {c.desc1}
                      <br />
                      {c.desc2}
                    </S_Description>
                  ) : (
                    <div />
                  )}
                  <S_DateWrapper>
                    <span>{c.date}</span>
                    <span>{c.host}</span>
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

const CERTIFICATE = [
  {
    title: '6시그마(GB)',
    desc1: '',
    desc2: '',
    date: '2021.01.12',
    host: '한국자격검정평가진흥원',
  },
  {
    title: 'Microsoft Office Specialist 2010 Master',
    desc1: 'Excel 2010 Expert, PowerPoint 2010, Access 2010, Word 2010 Expert',
    desc2: '',
    date: '2019.08.23',
    host: 'Microsoft',
  },
  {
    title: 'ERP정보관리사 생산 2급',
    desc1: '',
    desc2: '',
    date: '2019.08.13',
    host: '한국생산성본부',
  },
  {
    title: '스마트팩토리 운영관리사 2급',
    desc1: '',
    desc2: '',
    date: '2018.12.12',
    host: '동아대학교',
  },
  {
    title: '품질경영기사',
    desc1: '',
    desc2: '',
    date: '2018.05.25',
    host: '한국산업인력공단',
  },
]
