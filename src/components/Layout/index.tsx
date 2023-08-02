import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { useRecoilState, useRecoilValue } from 'recoil'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { darkTheme, lightTheme } from 'styles/theme'

import { toggleSidebarAtom, toggleThemeAtom } from 'etc/atoms'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'

interface I_Layout {
  title: string
  description: string
  url: string
  children: ReactNode
}

export default function Layout({
  title,
  description,
  url,
  children,
}: I_Layout) {
  const isDark = useRecoilValue(toggleThemeAtom)
  const [isSidebar, setIsSidebar] = useRecoilState(toggleSidebarAtom)

  return (
    <>
      {/* meta tag */}
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <meta name="twitter:image" content={image} /> */}
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <meta
          name="google-site-verification"
          content="lz6jkkwIl4-59M3vpHwBjlxhAswmWkwYjhHevpmfT9g"
        />

        {/* 웹 접근성 */}
        <html lang="ko" />
      </Helmet>

      {/* render */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />

        {/* <S_Container> */}
        <Header />
        <S_Content>
          <S_PageContainer>{children}</S_PageContainer>
        </S_Content>
        <Footer />
        {/* </S_Container> */}

        <Sidebar />
        <S_Backdrop
          isSidebar={isSidebar}
          onClick={() => setIsSidebar(prev => !prev)}
        />
      </ThemeProvider>
    </>
  )
}

const S_Backdrop = styled.div<{ isSidebar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => (props.isSidebar ? 'block' : 'none')};
  z-index: 2000;
`

export const S_PageContainer = styled.div`
  padding-top: 72px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 48px;
  }
`

// 웹 접근성 (main)
const S_Content = styled.main`
  max-width: 1296px;
  padding: 72px 0 172px;
  margin: 0 auto;

  @media ${props => props.theme.device.laptop} {
    max-width: 952px;
  }
  @media ${props => props.theme.device.tablet} {
    max-width: 630px;
    padding: 60px 0 172px;
  }
  @media ${props => props.theme.device.mobile} {
    max-width: 412px;
    padding: 60px 24px 172px;
  }
`

export const S_Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
