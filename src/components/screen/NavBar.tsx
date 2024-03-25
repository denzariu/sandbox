import { useContext } from 'react'
import { ViewContext } from '../context/View'

function NavBar() {
  const perspective = useContext(ViewContext)

  return (
    <div className='fixed flex align-middle justify-center top-0 left-0 right-0 h-20 bg-slate-200'>
      <button className='my-2 px-8 py-4 self-center bg-slate-400 text-white rounded-full'
        onClick={perspective.toggleView}
      >
        Perspective
      </button>
    </div>
  )
}

export default NavBar
