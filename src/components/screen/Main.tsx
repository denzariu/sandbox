import { useContext, useReducer, useState } from 'react'
import { ViewContext } from '../context/View'
import { ThemeContext } from '../context/Theme'

import ContentSwitch, { ContentType } from './ContentSwitch';
import NavBar from './NavBar';
import NavTopBar from './NavTopBar';

const initState = {
  user: false,
  menu: false,
  components: false
};

function reducer(state: typeof initState, action: string) {
  if (action === 'menu') {
    return {...state,
      menu: !state.menu
    };
  }
  else if (action === 'user') {
    return {...state,
      user: !state.user
    }
  }
  else if (action === 'components') {
    return {...state,
      components: !state.components
    }
  }
  throw Error('Unknown action.');
}

function Main () {

    // State management for what is currently open on the page
    const [dropdown, open] = useReducer(reducer, initState)

  // Current content
  const [content, setContent] = useState<ContentType>('all')  

  const perspective = useContext(ViewContext)
  const { theme } = useContext(ThemeContext)

  

  return (
    <>
    
    <NavTopBar props={{dropdown, open, setContent}}/>
    <NavBar props={{dropdown, open, setContent}}/>


    {/* Content Wrapper */}
    {/* Clean up pls */}
    <div data-theme={theme.isDark ? 'myDark' : 'myLight'}
      className={`
        bg-accent pt-20 pb-4 w-full px-4 min-h-screen overflow-auto
        ${perspective.view === 'desktop' ? 'h-full' : 'sm:w-auto sm:h-full flex justify-center items-center'}`} 
    >
      <div 
        className={`min-h-screenDISABLED flex justify-center 
          ${perspective.view === 'desktop' ? 
          '' : ' sm:w-[400px] sm:h-[740px] sm:scale-75 xl:scale-100 overflow-y-scroll border-black border-8 rounded-3xl py-2 '}`}
      >
        
        <ContentSwitch content={content}/>
        
      </div>
    </div>
    </>
  )
}

export default Main
