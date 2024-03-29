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
    <>
    {/* Cropped Card */}
    <div className="relative">
      <div className={`flex ${theme.colors.text.background}`}>
        <div className={`grow rounded-t-3xl ${theme.colors.background.primary} pt-6 px-6`}>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-base">{subtitle}</p>
        </div>
        <div className={`${theme.colors.background.primary} rounded-tl-[1.6rem] rounded-tr-[1.6rem] rounded-br-[1.6rem]`}>
          <div className={`${theme.colors.background.secondary} p-3 rounded-bl-[2.5rem] `}>
            <div className={`flex items-center justify-center rounded-full ${theme.colors.background.primary} p-4`}>
              {icon}
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`rounded-tr-3xl rounded-b-3xl ${theme.colors.background.primary} p-3`}>
       {/* Child objects */}
      {children?.map(child => 
        child  
      )}
      </div>
    </div>

    {/* Non-cropped Card */}
    <div className={`p-4 max-w-screen-sm rounded-3xl flex flex-col gap-y-4 ${color} ${theme.colors.text.background}`}>
      
      {/* Header - Title/subtitle & Icon */}
      <div className='flex'>
        {/* Inline title/subtitle */}
        <div className='grow rounded-t-3xl'>
          <h2 className='tracking-tight text-xl font-bold'>
            {title}
          </h2>
          <h3 className={`tracking-wide ${theme.colors.text.background} text-opacity-80`}>
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
    </>
)
}

export default Card
