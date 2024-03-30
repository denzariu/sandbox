import React, { Component, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/Theme'
import { Minus, Plus, Weather } from '../../../assets/svgs'

export const Temperature = () => {

  const { theme } = useContext(ThemeContext)
  const [temperature, setTemperature] = useState(22)

  const changeTemp = (increment: number) => {
    setTemperature(prevTemperature => prevTemperature + increment)
  }

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-bl flex justify-between items-center  
    ${theme.colors.gradient.from.primary} 
    ${theme.colors.gradient.to.tertiary} 
    ${theme.colors.text.foreground}`}>
      <button 
        onClick={() => changeTemp(-1)}
        className={`p-3 rounded-full text-3xl
          ${theme.colors.background.primary} 
          ${theme.colors.text.background}`}
      >
        <Minus height={16} width={16} color={theme.colors.fill.quaternary}/>  
      </button>
      <div className={`flex flex-col items-center ${theme.colors.text.background}`}>
        <p className={`text-3xl font-bold opacity-100`}>{temperature + '°'}</p>
        <div className='flex items-center gap-x-1 font-semibold'>
          <Weather height={16} width={16} color={theme.colors.fill.quaternary}/>
          <p>Cool</p>
        </div>
      </div>
      <button
        onClick={() => changeTemp(+1)}
        className={`p-3 rounded-full text-3xl
          ${theme.colors.background.primary} 
          ${theme.colors.text.background}`}
      >
        <Plus height={16} width={16} color={theme.colors.fill.quaternary}/>
      </button>
    </div>
  )
  
}

export default Temperature
