import { useId } from "react"
import AddComponent from "./mini/AddComponent"

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
    <div className={`w-80 sm:w-autoDISABLED h-fit p-3 rounded-3xl flex flex-col ${color} text-neutral-content group`} key={useId()}>
      
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
        <div className={'w-12 h-12 rounded-full self-center flex items-center justify-center ' + iconColor}>
          {icon}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {/* Child objects */}
        {children?.map(child => 
          child
        )}
      </div>

      {/* Add Object */}
      <AddComponent />
    </div>
)
}

export default Card
