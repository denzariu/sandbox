type CardProps = {
  color: string,
  title: string,
  subtitle?: string,
  icon?: JSX.Element,
  iconColor?: string,
  children?: JSX.Element[],
}

function Card({title, subtitle, children, color, icon, iconColor}: CardProps) {

  return (

    // {/* Non-cropped Card */}
    // {/* Add min width */}
    <div className={`w-80 sm:w-autoDISABLED h-fit p-3 rounded-3xl flex flex-col gap-y-4 ${color} text-neutral-content`}>
      
      {/* Header - Title/subtitle & Icon */}
      <div className='flex'>

        {/* Inline title/subtitle */}
        <div className='grow rounded-t-3xl pt-3 px-3'>
          <h2 className='text-xl font-bold'>
            {title}
          </h2>
          <h3 className={`text-base font-medium text-primary`}>
            {subtitle}
          </h3>
        </div>

        {/* Icon */}
        <button className={'w-12 h-12 rounded-full self-center flex items-center justify-center ' + iconColor}>
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
