import { useContext } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'
import Card from '../default/Card'
import { Lamp, Thermostat } from '../../assets/svgs'
import Temperature from '../default/mini/Temperature'
import CardCut from '../default/CardCut'
import '../../index.css'
import Luminosity from '../default/mini/Luminosity'
import Player from '../default/mini/Player'


function Content() {
  const perspective = useContext(ViewContext)
  // const { theme } = useContext(ThemeContext)!

  return (
    // <div className="min-h-screen flex justify-center " data-theme={theme.isDark ? 'myDark' : 'myLight'}>
    //   <div className={`
    //     bg-accent py-20 w-full px-4 min-h-screen overflow-auto
    //     ${perspective.view === 'desktop' ? 
    //       'h-full'
    //     : 'sm:w-auto sm:max-w-screen-sm sm:h-full min-h-screen sm:aspect-[9/18.5]'}`
    //   }>

        // {/* Currently added Cards */}
        // {/* <div className={`grid grid-cols-1grid-rows-4 flex-wrap justify-center ${perspective.view === 'mobile' ? '': 'md:grid-cols-2 lg:grid-cols-4 lg:justify-start'} gap-4`}> */}
        
        <div className='flex flex-wrap justify-center gap-4'>
          {/* // <> */}
          <div className={`flex flex-col flex-wrap justify-center ${perspective.view === 'mobile' ? '': ''} gap-4`}> 
            
            <Card
              title='Thermostat'
              subtitle='Cooling to 20°'
              icon={<Thermostat key={'1'} height={24} width={24} color='fill-secondary'/>}
              iconColor='bg-accent'
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
          </div>
          <div className={`flex flex-col gap-4`}> 
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
          </div>
          {/* </> */}
        </div>
    //   </div>
    // </div>
  )
}

export default Content
