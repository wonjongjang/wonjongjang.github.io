import { atom, selector } from 'recoil'

// Theme
const themeSelector = selector({
  key: 'themeSelector',
  get: () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false,
})
export const toggleThemeAtom = atom({
  key: 'theme',
  default: themeSelector,
})

// Sidebar
export const toggleSidebarAtom = atom({
  key: 'sidebar',
  default: false,
})
