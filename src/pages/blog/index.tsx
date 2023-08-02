import React from 'react'

import Layout from 'components/Layout'
import { S_FadeInAnimation, S_PageDescript, S_PageTitle } from 'pages'

interface I_Blog {
  location: {
    href: string
  }
}

export default function Blog({ location: { href } }: I_Blog) {
  return (
    <Layout title="Blog" description="개발 외 여러가지 관심사" url={href}>
      <S_FadeInAnimation>
        <S_PageTitle>Blog</S_PageTitle>
        <S_PageDescript>개발 외 여러가지 관심사</S_PageDescript>
      </S_FadeInAnimation>
    </Layout>
  )
}
