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
            <S_Icon
              alt="javascript"
              src={badgeMaker('javascript-F7DF1E', 'javascript', 'black')}
            />
            <S_Icon
              alt="typescript"
              src={badgeMaker('typescript-3178C6', 'typescript', 'white')}
            />
            <S_Icon
              alt="python"
              src={badgeMaker('python-3776AB', 'python', 'white')}
            />
            <S_Icon
              alt="java"
              src={badgeMaker('java-007396', 'java', 'white')}
            />
          </S_TypeContent>
        </S_Type>
        <S_Type>
          <S_TypeTitle>Library & Framework</S_TypeTitle>
          <S_TypeContent>
            <S_Icon
              alt="react"
              src={badgeMaker('react-61DAFB', 'react', 'black')}
            />
            <S_Icon
              alt="next.js"
              src={badgeMaker('next.js-000000', 'next.js', 'white')}
            />
            <S_Icon
              alt="gatsby"
              src={badgeMaker('gatsby-663399', 'gatsby', 'white')}
            />
            <S_Icon
              alt="vue.js"
              src={badgeMaker('vue.js-4FC08D', 'vue.js', 'white')}
            />
            <S_Icon
              alt="django"
              src={badgeMaker('django-092E20', 'django', 'white')}
            />
          </S_TypeContent>
        </S_Type>
        <S_TypeEnd>
          <S_TypeTitle>Communication</S_TypeTitle>
          <S_TypeContent>
            <S_Icon alt="git" src={badgeMaker('git-F05032', 'git', 'white')} />
            <S_Icon
              alt="jira"
              src={badgeMaker('jira-0052CC', 'jira', 'white')}
            />
            <S_Icon
              alt="confluence"
              src={badgeMaker('confluence-172B4D', 'confluence', 'white')}
            />
            <S_Icon
              alt="figma"
              src={badgeMaker('figma-F24E1E', 'figma', 'white')}
            />
            <S_Icon
              alt="notion"
              src={badgeMaker('notion-000000', 'notion', 'white')}
            />
            <S_Icon
              alt="slack"
              src={badgeMaker('slack-4A154B', 'slack', 'white')}
            />
            <S_Icon
              alt="mattermost"
              src={badgeMaker('mattermost-0058CC', 'mattermost', 'white')}
            />
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
