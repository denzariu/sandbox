
import LogIn from './LogIn'
import Dashboard from './showcase/Dashboard'
import ShowcaseCard from './showcase/ShowcaseCard'
import ShowcaseCardCut from './showcase/ShowcaseCardCut'


export type ContentType = 'all' | 'element-card' | 'element-card-cut' | 'log-in'
type ContentSwitchProps = {
  content: ContentType
}

function ContentSwitch({ content }: ContentSwitchProps) {
  
  // useEffect(() => {
  switch(content) {
    case 'all': 
      return <Dashboard/>

    case 'element-card':
      return <ShowcaseCard/>

    case 'element-card-cut':
      return <ShowcaseCardCut/>
    
    case 'log-in':
      return <LogIn/>

    default:
      return <></>
  }
}


export default ContentSwitch
