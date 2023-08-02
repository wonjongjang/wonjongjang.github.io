// declaration file
// TypeScript와 styled components theme 연결

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      ownColor: string
      ownColorHover: string
      bgColor: string
      textColor: string
      subTextColor: string
      tabColor: string
      boxColor: string
      boxTabColor: string
      boxTextColor: string
      selectBoxColor: string
      postDateColor: string
      postContentColor: string
      footerBgColor: string
      footerBorderColor: string
    }
    device: {
      mobile: string
      tablet: string
      laptop: string
    }
  }
}
