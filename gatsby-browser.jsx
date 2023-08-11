/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import 'prismjs/themes/prism-tomorrow.css'

import React, { useEffect } from 'react'
import { RecoilRoot, useSetRecoilState } from 'recoil'

import { toggleThemeAtom } from 'etc/atoms'

const ThemeInitializer = () => {
  const setIsDark = useSetRecoilState(toggleThemeAtom)

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])
}

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <ThemeInitializer />
      {element}
    </RecoilRoot>
  )
}
