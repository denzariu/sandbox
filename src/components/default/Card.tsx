import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

type CardProps = {
  color: string,
  title: string,
  subtitle?: string,
  children?: JSX.Element[],
}

function Card({title, subtitle, children, color}: CardProps) {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`p-4 w-fit rounded-3xl font-mono flex flex-col gap-y-4 ${color} ${theme.colors.text.background}`}>
      
      {/* Title/subtitle & Icon */}
      <div className='flex gap-x-8'>
        {/* Inline title/subtitle */}
        <div>
          <h2 className='text-2xl font-semibold'>
            {title}
          </h2>
          <h3 className=''>
            {subtitle}
          </h3>
        </div>
        <button className={`w-12 h-12 rounded-full self-center ${theme.colors.background.secondary}`}>
          X
        </button>
      </div>

      {/* Child objects */}
      {children?.map(child => 
        child  
      )}
    </div>
)
}

export default Card
