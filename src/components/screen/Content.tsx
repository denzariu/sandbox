
import Card from '../default/Card'
import { Lamp, Thermostat } from '../../assets/svgs'
import Temperature from '../default/mini/Temperature'
import CardCut from '../default/CardCut'
import '../../index.css'
import Luminosity from '../default/mini/Luminosity'
import Player from '../default/mini/Player'


function Content() {

  return (
    <>
      <div className={`space-y-4`}> 
        
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-neutral'/>}
          children={[<Temperature from='from-amber-600' to='to-yellow-500'/>]}
          color='bg-neutral'
          iconColor='bg-amber-500'
        />
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp key={'3'} height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-accent'
          children={[<Player/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature/>]}
          color='bg-neutral'
        />
        
      </div>
      <div className={`space-y-4`}> 
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp key={'3'} height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-accent'
          children={[<Player/>]}
          color='bg-neutral'
        />
        <Card
          title='Lamp'
          subtitle='Settings for evening'
          icon={<Lamp key={'4'} height={24} width={24} color='fill-accent-content'/>}
          iconColor='bg-primary'
          children={[<Luminosity/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature from='from-primary' to='to-secondary'/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature/>]}
          color='bg-neutral'
        />
      </div>
      <div className={`space-y-4`}> 
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature/>]}
          color='bg-neutral'
        />
        <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature/>]}
          color='bg-neutral'
        />
        <Card
          title='HomePod'
          subtitle='Playing...'
          icon={<Lamp key={'3'} height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-accent'
          children={[<Player/>]}
          color='bg-neutral'
        />
        <Card
          title='Lamp'
          subtitle='Settings for evening'
          icon={<Lamp key={'4'} height={24} width={24} color='fill-accent-content'/>}
          iconColor='bg-yellow-400'
          children={[<Luminosity colorRange='range-warning'/>]}
          color='bg-neutral'
        />
        
      </div>
    </>
  )
}

export default Content
