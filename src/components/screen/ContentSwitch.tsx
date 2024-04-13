import { createContext, useState } from "react";
import LogIn from './LogIn'
import SignUp from './SignUp'
import Dashboard from './showcase/Dashboard'
import ShowcaseCard from './showcase/ShowcaseCard'
import ShowcaseCardCut from './showcase/ShowcaseCardCut'
import P5 from "./P5";


export type ContentType = 'all' | 'element-card' | 'element-card-cut' | 'p5' | 'log-in' | 'sign-up' | undefined

// Context Type
interface ContentContextType {
  contentType: ContentType;
  content: JSX.Element;
  toggleContent: (type: ContentType) => void;
}

// Creating a Theme Context
export const ContentContext = createContext<ContentContextType>({
  contentType: 'all',
  content: <Dashboard/>,
  //@ts-ignore
  toggleContent: (type: ContentType) => {}

})

// Creating a Provider for the Context
function ContentProvider({ children }: any) {
  
  const [contentType, setContentType] = useState<ContentType>('all');
  const [content, setContent] = useState<JSX.Element>(<Dashboard/>);


  const toggleContent = (type: ContentType) => {
    setContentType('all')
    switch(type) {
      case 'all': 
        setContent(<Dashboard/>)
        break;
  
      case 'element-card':
        setContent(<ShowcaseCard/>)
        break;
  
      case 'element-card-cut':
        setContent(<ShowcaseCardCut/>)
        break;

      case 'p5': 
        setContent(<P5/>)
        break;
      
      case 'log-in':
        setContent(<LogIn/>)
        break;
      
      case 'sign-up':
        setContent(<SignUp/>)
        break;
    
  
      default:
        setContentType(undefined)
        setContent(<></>)
    }
  };

  

  return (
    <ContentContext.Provider value={{ contentType, content, toggleContent }}>
      {children}
    </ContentContext.Provider>
  );
  

  
}




export default ContentProvider
