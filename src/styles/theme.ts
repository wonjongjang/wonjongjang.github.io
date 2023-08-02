// theme 정의

import { DefaultTheme } from 'styled-components'

// 밝은 테마
export const lightTheme: DefaultTheme = {
  colors: {
    ownColor: '#00a8ff',
    ownColorHover: '#0086cc',
    bgColor: '#ffffff',
    textColor: '#000000',
    subTextColor: '#666666',
    tabColor: '#eeeeee',
    boxColor: '#ffffff',
    boxTabColor: '#eeeeee',
    boxTextColor: '#666666',
    selectBoxColor: '#1a1a1a',
    postDateColor: '#333333',
    postContentColor: '#666666',
    footerBgColor: '#ffffff',
    footerBorderColor: '#ebebeb',
  },
  device: {
    mobile: `screen and (max-width: 767px)`,
    tablet: `screen and (max-width: 1023px)`,
    laptop: `screen and (max-width: 1439px)`,
  },
}

// 어두운 테마
export const darkTheme: DefaultTheme = {
  colors: {
    ownColor: '#00a8ff',
    ownColorHover: '#0086cc',
    bgColor: '#000000',
    textColor: '#ffffff',
    subTextColor: '#777777',
    tabColor: '#333333',
    boxColor: '#333333',
    boxTabColor: '#444444',
    boxTextColor: '#999999',
    selectBoxColor: '#ffffff',
    postDateColor: '#a8a8a8',
    postContentColor: '#a8a8a8',
    footerBgColor: '#111111',
    footerBorderColor: '#111111',
  },
  device: {
    mobile: `screen and (max-width: 767px)`,
    tablet: `screen and (max-width: 1023px)`,
    laptop: `screen and (max-width: 1439px)`,
  },
}
