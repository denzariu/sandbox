import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

type CardProps = {
  color: string,
  title: string,
  subtitle?: string,
  icon?: JSX.Element,
  children?: JSX.Element[],
}

function Card({title, subtitle, children, color, icon}: CardProps) {
  const {theme} = useContext(ThemeContext)

  return (

    // {/* Non-cropped Card */}
    <div className={`p-3 max-w-screen-sm rounded-3xl flex flex-col gap-y-4 ${color} ${theme.colors.text.background}`}>
      
      {/* Header - Title/subtitle & Icon */}
      <div className='flex'>
        {/* Inline title/subtitle */}
        <div className='grow rounded-t-3xl pt-3 px-3'>
          <h2 className='text-xl font-bold'>
            {title}
          </h2>
          <h3 className={`text-base ${theme.colors.text.background} text-opacity-80`}>
            {subtitle}
          </h3>
        </div>

        {/* Icon */}
        <button className={`w-12 h-12 rounded-full self-center flex items-center justify-center ${theme.colors.background.secondary}`}>
          {icon}
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
