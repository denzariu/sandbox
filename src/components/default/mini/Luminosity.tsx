import { useId } from 'react'
import { HighBrightness, LowBrightness } from '../../../assets/svgs'

type LuminosityProps = {
  colorRange?: string 
}

function Luminosity({ colorRange }: LuminosityProps) {
  return (
    <div className='flex items-center gap-x-4 mx-3 flex-1' key={useId()}>
      <LowBrightness height={24} width={24} color='fill-secondary'/>
      <input type='range' min="0" max="100" className={`range range-lg ${colorRange ? colorRange : "range-primary"}`} />
      <HighBrightness height={24} width={24} color='fill-secondary'/>

    </div>
  )
}

export default Luminosity
