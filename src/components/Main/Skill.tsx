import React from 'react'

import styled from 'styled-components'

export default function Skill() {
  const badgeMaker = (icon: string, logo: string, logoColor: string) => {
    return `https://img.shields.io/badge/${icon}.svg?&style=for-the-badge&logo=${logo}&logoColor=${logoColor}`
  }

  return (
    <S_Container>
      <S_Title>Programming Skills</S_Title>
      <S_TypeList>
        <S_Type>
          <S_TypeTitle>Language</S_TypeTitle>
          <S_TypeContent>
            {LANGUAGE.map((v, i) => (
              <S_Icon
                alt={v.type}
                src={badgeMaker(v.type + '-' + v.code, v.type, v.color)}
                key={i}
              />
            ))}
          </S_TypeContent>
        </S_Type>
        <S_Type>
          <S_TypeTitle>Library & Framework</S_TypeTitle>
          <S_TypeContent>
            {LibraryAndFramework.map((v, i) => (
              <S_Icon
                alt={v.type}
                src={badgeMaker(  v.title + '-' + v.code, v.type, v.color)}
                key={i}
              />
            ))}
          </S_TypeContent>
        </S_Type>
        <S_TypeEnd>
          <S_TypeTitle>Communication</S_TypeTitle>
          <S_TypeContent>
            {COMMUNICATION.map((v, i) => (
              <S_Icon
                alt={v.type}
                src={badgeMaker(v.type + '-' + v.code, v.type, v.color)}
                key={i}
              />
            ))}
          </S_TypeContent>
        </S_TypeEnd>
      </S_TypeList>
    </S_Container>
  )
}

const S_Icon = styled.img`
  border-radius: 4px;
`

const S_TypeContent = styled.div`
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

const LANGUAGE = [
  {
    type: 'javascript',
    code: 'F7DF1E',
    color: 'black',
  },
  {
    type: 'typescript',
    code: '3178C6',
    color: 'white',
  },
  {
    type: 'python',
    code: '3776AB',
    color: 'white',
  },
  {
    type: 'java',
    code: '007396',
    color: 'white',
  },
]

const LibraryAndFramework = [
  {
    title: 'react',
    type: 'react',
    code: '61DAFB',
    color: 'black',
  },
  {
    title: 'react native',
    type: 'react',
    code: '61DAFB',
    color: 'black',
  },
  {
    title: 'next.js',
    type: 'next.js',
    code: '000000',
    color: 'white',
  },
  {
    title: 'gatsby',
    type: 'gatsby',
    code: '663399',
    color: 'white',
  },
  {
    title: 'vue.js',
    type: 'vue.js',
    code: '4FC08D',
    color: 'white',
  },
  {
    title: 'django',
    type: 'django',
    code: '092E20',
    color: 'white',
  },
]

const COMMUNICATION = [
  {
    type: 'git',
    code: 'F05032',
    color: 'white',
  },
  {
    type: 'jira',
    code: '0052CC',
    color: 'white',
  },
  {
    type: 'confluence',
    code: '172B4D',
    color: 'white',
  },
  {
    type: 'figma',
    code: 'F24E1E',
    color: 'white',
  },
  {
    type: 'notion',
    code: '000000',
    color: 'white',
  },
  {
    type: 'slack',
    code: '4A154B',
    color: 'white',
  },
  {
    type: 'mattermost',
    code: '0058CC',
    color: 'white',
  },
]
