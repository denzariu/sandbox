import React, { useEffect } from 'react'
import Content from './Content'
import Card from '../default/Card'
import CardCut from '../default/CardCut'
import Temperature from '../default/mini/Temperature'
import { Thermostat } from '../../assets/svgs'


export type ContentType = 'all' | 'element-card' | 'element-card-cut'
type ContentSwitchProps = {
  content: ContentType
}

function ContentSwitch({ content }: ContentSwitchProps) {
  
  // useEffect(() => {
    switch(content) {
      case 'all': 
        return <Content/>
      case 'element-card':
        return <Card
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'1'} height={24} width={24} color='fill-secondary'/>}
          iconColor='bg-accent'
          children={[<Temperature/>]}
          color='bg-neutral'
        />
      case 'element-card-cut':
        return <CardCut
          title='Thermostat'
          subtitle='Cooling to 20°'
          icon={<Thermostat key={'2'} height={24} width={24} color='fill-accent-content'/>}
          children={[<Temperature/>]}
          color='bg-neutral'
        />
        
      return <></>
    }

  // }, [ content ])

  // return (
  //   <div>
      
  //   </div>
  // )
}

export default ContentSwitch
