import React, { createRef, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { toggleThemeAtom } from 'etc/atoms'

const src = 'https://utteranc.es/client.js'
const repo = 'wonjongjang/wonjongjang.github.io' // 자신 계정의 레포지토리로 설정

interface I_UtterancesAttributesType {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

export default function CommentWidget() {
  const isDark = useRecoilValue(toggleThemeAtom)

  const element = createRef<HTMLDivElement>()
  useEffect(() => {
    if (element.current === null) return

    const firstChild = element.current.firstChild
    if (firstChild) element.current.removeChild(firstChild)

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: I_UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: isDark ? 'github-dark' : 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [isDark])

  return <div ref={element} />
}
