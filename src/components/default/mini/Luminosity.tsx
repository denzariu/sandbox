import { HighBrightness, LowBrightness } from '../../../assets/svgs'

function Luminosity() {
  return (
    <div className='flex items-center gap-x-4 mx-3 flex-1'>
      <LowBrightness height={24} width={24} color='fill-secondary'/>
      <input type='range' min="0" max="100" className='range range-lg range-primary' />
      <HighBrightness height={24} width={24} color='fill-secondary'/>

    </div>
  )
}

export default Luminosity
