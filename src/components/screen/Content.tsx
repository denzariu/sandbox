import React, { useContext } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'

function Content() {
  const perspective = useContext(ViewContext)
  const {theme, toggleTheme} = useContext(ThemeContext)!

  return (
    <div className='h-screen bg-slate-400 flex justify-center'>
      <div className={
        perspective.view === 'desktop' ? `pt-20 w-full h-full ${theme.colors.background}` 
        : `pt-20 w-full sm:w-auto sm:max-w-screen-sm sm:h-full sm:aspect-[9/18.5] ${theme.colors.background}`
      }>
        <p>{perspective.view}</p>
        <p>{theme.isDark ? 'dark' : 'not dark'}</p>
      </div>
    </div>
  )
}

export default Content
