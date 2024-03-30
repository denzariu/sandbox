import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'
import { HighBrightness, LowBrightness } from '../../../assets/svgs'

function Luminosity() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex items-center gap-x-4 mx-3'>
      <LowBrightness height={24} width={24} color={theme.colors.fill.quaternary}/>
      <input type='range' min="0" max="100" className={`range range-lg range-secondary`} data-theme={theme.isDark ? 'myDark' : 'myLight'}/>
      <HighBrightness height={24} width={24} color={theme.colors.fill.quaternary}/>

    </div>
  )
}

export default Luminosity
