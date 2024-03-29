import { useContext } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'

function NavBar() {
  const perspective = useContext(ViewContext)
  const {theme, toggleTheme} = useContext(ThemeContext)!

  return (
    <div className={`fixed flex align-middle justify-center top-0 left-0 right-0 h-20 gap-x-2 ${theme.colors.background.quaternary} border-b-2 border-gray-400 z-20`}>
      <button className={`my-2 px-8 py-4 self-center ${theme.colors.background.tertiary} ${theme.colors.text.foreground} rounded-full`}
        onClick={perspective.toggleView}
      >
        Perspective
      </button>
      <button className={`my-2 px-8 py-4 self-center ${theme.colors.background.tertiary} ${theme.colors.text.foreground} rounded-full`}
        onClick={toggleTheme}
      >
        Theme
      </button>
    </div>
  )
}

export default NavBar
