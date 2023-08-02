import React from 'react'

import styled from 'styled-components'

export default function Footer() {
  return (
    <S_Container>
      <S_Wrapper>
        <S_Name>Wonjong Jang</S_Name>
        <S_Email>bjlaancgk@naver.com</S_Email>
        <S_BottomWrapper>
          <S_IconWrapper>
            <S_Icon
              viewBox="0 0 32.6 31.8"
              onClick={() => window.open('https://github.com/wonjongjang')}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5
                    c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
                    c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
                    C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
                    c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
                    c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"
              ></path>
            </S_Icon>
            <S_Icon
              viewBox="0 0 40.2 40.3"
              onClick={() => window.open('https://www.instagram.com/1xong/')}
            >
              <g>
                <path
                  d="M20.2,3.6c5.4,0,6,0,8.2,0.1c2,0.1,3,0.4,3.7,0.7C33,4.8,33.7,5.3,34.4,6s1.1,1.4,1.5,2.3
                    c0.3,0.7,0.6,1.8,0.7,3.7c0.1,2.1,0.1,2.8,0.1,8.2s0,6-0.1,8.2c-0.1,2-0.4,3-0.7,3.7c-0.4,0.9-0.8,1.6-1.5,2.3s-1.4,1.1-2.3,1.5
                    c-0.7,0.3-1.8,0.6-3.7,0.7c-2.1,0.1-2.8,0.1-8.2,0.1s-6,0-8.2-0.1c-2-0.1-3-0.4-3.7-0.7c-0.9-0.4-1.6-0.8-2.3-1.5S4.9,33,4.5,32.1
                    c-0.3-0.7-0.6-1.8-0.7-3.7c-0.1-2.1-0.1-2.8-0.1-8.2s0-6,0.1-8.2c0.1-2,0.4-3,0.7-3.7C4.8,7.3,5.3,6.7,6,6s1.4-1.1,2.3-1.5
                    C9,4.2,10.1,3.8,12,3.8C14.2,3.7,14.8,3.6,20.2,3.6 M20.2,0c-5.5,0-6.2,0-8.3,0.1C9.7,0.2,8.2,0.6,7,1.1C5.6,1.6,4.5,2.3,3.4,3.4
                    S1.6,5.6,1.1,7c-0.5,1.3-0.8,2.8-0.9,4.9C0,14,0,14.7,0,20.2s0,6.2,0.1,8.3s0.4,3.6,0.9,4.9c0.5,1.3,1.2,2.5,2.3,3.6
                    s2.2,1.8,3.6,2.3c1.3,0.5,2.8,0.8,4.9,0.9c2.2,0.1,2.8,0.1,8.3,0.1s6.2,0,8.3-0.1s3.6-0.4,4.9-0.9c1.3-0.5,2.5-1.2,3.6-2.3
                    s1.8-2.2,2.3-3.6c0.5-1.3,0.8-2.8,0.9-4.9c0.1-2.2,0.1-2.8,0.1-8.3s0-6.2-0.1-8.3S39.7,8.3,39.2,7S38,4.5,36.9,3.4
                    s-2.2-1.8-3.6-2.3c-1.3-0.5-2.8-0.8-4.9-0.9C26.3,0,25.7,0,20.2,0L20.2,0L20.2,0z"
                ></path>
                <path
                  d="M20.2,9.8c-5.7,0-10.4,4.6-10.4,10.4s4.6,10.4,10.4,10.4S30.6,26,30.6,20.2S25.9,9.8,20.2,9.8L20.2,9.8z
                    M20.2,26.9c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7s6.7,3,6.7,6.7C26.9,23.9,23.9,26.9,20.2,26.9L20.2,26.9z"
                ></path>
                <path d="M33.4,9.4c0,1.3-1.1,2.4-2.4,2.4s-2.4-1.1-2.4-2.4s1-2.4,2.3-2.4C32.2,7,33.4,8.1,33.4,9.4L33.4,9.4z"></path>
              </g>
            </S_Icon>
          </S_IconWrapper>
          <S_Copy>&copy; 2023 Wonjong Jang. Built with Gatsby.</S_Copy>
        </S_BottomWrapper>
      </S_Wrapper>
    </S_Container>
  )
}

const S_Copy = styled.span`
  font-size: 12px;
`

const S_Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #888888;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`

const S_IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const S_BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const S_Email = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.2px;
`

const S_Name = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.2px;
`

const S_Wrapper = styled.div`
  max-width: 1296px;
  margin: 0 auto;
  padding: 37px 0 48px;

  @media ${props => props.theme.device.laptop} {
    max-width: 952px;
    padding-top: 36px;
  }
  @media ${props => props.theme.device.tablet} {
    max-width: 630px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 412px;
    padding-left: 24px;
    padding-right: 24px;
  }
`

const S_Container = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.footerBgColor};
  border-top: 1px solid ${props => props.theme.colors.footerBorderColor};
  color: #888888;
`
