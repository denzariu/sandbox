import React, { useContext } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'
import Card from '../default/Card'

function Content() {
  const perspective = useContext(ViewContext)
  const {theme, toggleTheme} = useContext(ThemeContext)!

  return (
    <div className='h-screen bg-slate-400 flex justify-center'>
      <div className={`
        ${theme.colors.background.secondary} pt-20 w-full px-4
        ${perspective.view === 'desktop' ? 
          'h-full'
        : 'sm:w-auto sm:max-w-screen-sm sm:h-full sm:aspect-[9/18.5]'}`
      }>
        <p className={theme.colors.background.quaternary}>{perspective.view}</p>
        <p className={theme.colors.background.tertiary}>{theme.isDark ? 'dark' : 'not dark'}</p>
        <p className={theme.colors.background.secondary}>Hi</p>
        <br/>

        <Card
          title='Thermostat'
          subtitle='Cooling to 20°'
          children={[<div className={`p-4 rounded-lg ${theme.colors.background.tertiary} ${theme.colors.text.foreground}`}>Hi</div>]}
          color={theme.colors.background.primary}
        />
      </div>
    </div>
  )
}

export default Content
