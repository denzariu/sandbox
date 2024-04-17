
import Card from '../../default/Card'
import { Lamp, Thermostat } from '../../../assets/svgs'
import Temperature from '../../default/mini/Temperature'
import CardCut from '../../default/CardCut'
import '../../../index.css'
import Luminosity from '../../default/mini/Luminosity'
import Player from '../../default/mini/Player'
import { useId } from 'react'


function Dashboard() {

  return (
    <div className='flex flex-wrap justify-center gap-4 w-24 lg:w-auto'>
      <div className={`space-y-4`} key='content-row-1'> 
        
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-neutral'/>}
          children={[<Temperature from='from-amber-600' to='to-yellow-500' key={useId()}/>]}
          color='bg-neutral'
          iconColor='bg-amber-500'
        />
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp height={24} width={24} color='fill-neutral-content'/>}
          iconColor='bg-accent'
          children={[<Temperature key={useId()}/>, <Player key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature key={useId()}/>]}
          color='bg-neutral'
        />
        
      </div>
      <div className={`space-y-4`} key='content-row-2'> 
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp height={24} width={24} color='fill-neutral-content'/>}
          iconColor='bg-accent'
          children={[<Player key={useId()}/>]}
          color='bg-neutral'
        />
        <Card
          title='Lamp'
          subtitle='Settings for evening'
          icon={<Lamp height={24} width={24} color='fill-accent-content'/>}
          iconColor='bg-primary'
          children={[<Luminosity key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature from='from-primary' to='to-secondary' key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Living Room'
          subtitle='Current mood: focus'
          icon={<Thermostat height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature key={useId()}/>, <Player key={useId()}/>]}
          color='bg-neutral'
        />
      </div>
      <div className={`space-y-4`} key='content-row-3'> 
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature key={useId()}/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature key={useId()}/>]}
          color='bg-neutral'
        />
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp height={24} width={24} color='fill-neutral-content'/>}
          iconColor='bg-accent'
          children={[<Player key={useId()}/>]}
          color='bg-neutral'
        />
        <Card
          title='Lamp'
          subtitle='Settings for evening'
          icon={<Lamp height={24} width={24} color='fill-accent-content'/>}
          iconColor='bg-yellow-400'
          children={[<Luminosity colorRange='range-warning' key={useId()}/>]}
          color='bg-neutral'
        />
        
      </div>
    </div>
  )
}

export default Dashboard
