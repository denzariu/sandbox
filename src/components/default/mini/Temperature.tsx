import { useState } from 'react'

import { Minus, Plus, Weather } from '../../../assets/svgs'

export const Temperature = () => {

  const [temperature, setTemperature] = useState(22)

  const changeTemp = (increment: number) => {
    setTemperature(prevTemperature => prevTemperature + increment)
  }

  return (
    <div className='p-4 rounded-xl bg-gradient-to-tr flex justify-between items-center  
      from-primary from-[-90%]
      to-neutral to-[110%]'
    >
      <button 
        onClick={() => changeTemp(-1)}
        className='p-3 rounded-full text-3xl
          bg-neutral 
          text-accent-content'
      >
        <Minus height={16} width={16} color='fill-neutral-content'/>  
      </button>
      <div className='flex flex-col items-center text-neutral-content'>
        <p className='text-3xl font-bold opacity-100'>{temperature + '°'}</p>
        <div className='flex items-center gap-x-1 font-semibold'>
          <Weather height={16} width={16} color='fill-neutral-content'/>
          <p>Cool</p>
        </div>
      </div>
      <button
        onClick={() => changeTemp(+1)}
        className='p-3 rounded-full text-3xl
          bg-neutral 
          text-secondary'
      >
        <Plus height={16} width={16} color='fill-neutral-content'/>
      </button>
    </div>
  )
  
}

export default Temperature
