import React, { useId } from 'react'
import CardCut from '../../default/CardCut'
import { Lamp, Thermostat } from '../../../assets/svgs'
import Temperature from '../../default/mini/Temperature'
import Luminosity from '../../default/mini/Luminosity'
import Player from '../../default/mini/Player'

function ShowcaseCardCut() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <div className={`space-y-4`} key='showcase-card-cut-row-1'> 

        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-neutral'
          children={[<Temperature key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Lamp'
          subtitle='Settings for evening'
          icon={<Lamp height={24} width={24} color='fill-accent-content'/>}
          iconColor='bg-yellow-400'
          children={[<Luminosity colorRange='range-warning' key={useId()}/>]}
          color='bg-neutral'
        />
      </div>

      <div className={`space-y-4`} key='showcase-card-cut-row-2'> 

        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-neutral'/>}
          iconColor='bg-secondary'
          children={[<Temperature from='from-secondary' to='to-primary' key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-neutral'
          children={[<Player key={useId()}/>]}
          color='bg-neutral'
        />
        
      </div>
    </div>
  )
}

export default ShowcaseCardCut
