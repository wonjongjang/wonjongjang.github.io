import { atom } from 'recoil'

// Theme
export const toggleThemeAtom = atom({
  key: 'theme',
  // default:
  // typeof window !== 'undefined'
  //   ? window.matchMedia('(prefers-color-scheme: dark)').matches
  //   : false,
  default: false,
})

// Sidebar
export const toggleSidebarAtom = atom({
  key: 'sidebar',
  default: false,
})
