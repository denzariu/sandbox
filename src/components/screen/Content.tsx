import React, { useContext } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'
import Card from '../default/Card'
import { Thermostat } from '../../assets/svgs'
import Temperature from '../default/mini/Temperature'
import CardCut from '../default/CardCut'
import '../../index.css'
import Luminosity from '../default/mini/Luminosity'


function Content() {
  const perspective = useContext(ViewContext)
  const {theme, toggleTheme} = useContext(ThemeContext)!

  return (
    <div className="h-screen flex justify-center overflow-hidden">
      <div className={`
        ${theme.colors.background.secondary} pt-20 w-full px-4
        ${perspective.view === 'desktop' ? 
          'h-full'
        : 'sm:w-auto sm:max-w-screen-sm sm:h-full sm:aspect-[9/18.5]'}`
      }>
        <div className='flex flex-col items-center text-center'>
          <p className={theme.colors.background.quaternary + ' w-36 ' + theme.colors.text.foreground}>{perspective.view.toUpperCase()}</p>
          <p className={theme.colors.background.tertiary + ' w-36 ' + theme.colors.text.foreground}>{theme.isDark ? 'Dark Theme' : 'Light Theme'}</p>
          <p className='border-[0.1rem] mt-4 border-slate-400 w-full'></p>
        </div>
        <br/>

        {/* Currently added Cards */}
        <div className={`grid grid-cols-1 flex-row flex-wrap justify-center ${perspective.view === 'mobile' ? '': 'md:grid-cols-2 lg:grid-cols-4 lg:justify-start'} gap-4`}>
          <Card
            title='Thermostat'
            subtitle='Cooling to 20°'
            icon={<Thermostat key={'1'} height={24} width={24} color={theme.colors.fill.quaternary}/>}
            children={[<Temperature/>]}
            color={theme.colors.background.primary}
          />
          <CardCut
            title='Thermostat'
            subtitle='Cooling to 20°'
            icon={<Thermostat key={'2'} height={24} width={24} color={theme.colors.fill.quaternary}/>}
            children={[<Temperature/>]}
            color={theme.colors.background.primary}
          />
          <Card
            title='Lamp'
            subtitle='Settings for evening'
            icon={<Thermostat key={'4'} height={24} width={24} color={theme.colors.fill.quaternary}/>}
            children={[<Luminosity/>]}
            color={theme.colors.background.primary}
          />
        </div>
      </div>
    </div>
  )
}

export default Content
