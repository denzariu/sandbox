import React, { useContext } from 'react'
import { ViewContext } from '../context/View'

function Content() {
  const perspective = useContext(ViewContext)

  return (
    <div className='h-screen bg-slate-400 flex justify-center'>
      <div className={perspective.view === 'desktop' ? 'mt-20 h-20 bg-green-50 aspect-[18/9]' : 'w-screen  bg-red-50 max-w-screen-sm aspect-video'}>
        {perspective.view}
      </div>
    </div>
  )
}

export default Content
