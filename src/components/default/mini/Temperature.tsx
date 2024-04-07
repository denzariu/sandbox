import { useId, useState } from 'react'

import { Minus, Plus, Weather } from '../../../assets/svgs'


type TemperatureProps = {
  from?: string,
  to?: string,
}
export const Temperature = ({ from, to }: TemperatureProps) => {

  const [temperature, setTemperature] = useState(22)

  const changeTemp = (increment: number) => {
    setTemperature(prevTemperature => prevTemperature + increment)
  }

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-tr flex justify-between items-center  
      ${from ? from : 'from-primary'} from-[-90%]
      //via-secondary via-[90%]
      ${to ? to : 'to-accent'} to-[190%]`}
      key={useId()}
    >
      {/* - */}
      <button 
        onClick={() => changeTemp(-1)}
        className='p-3 rounded-full text-3xl
          bg-neutral 
          text-accent-content'
      >
        <Minus height={16} width={16} color='fill-neutral-content'/>  
      </button>

      {/* Temperature */}
      <div className='flex flex-col items-center'>
        <p className='text-3xl font-bold opacity-100 text-primary-content'>{temperature + '°'}</p>
        <div className='flex items-center gap-x-1 font-semibold text-primary-content'>
          <Weather height={16} width={16} color='fill-primary-content'/>
          <p>Cool</p>
        </div>
      </div>

      {/* + */}
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
