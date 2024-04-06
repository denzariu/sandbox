import { Plus } from "../../assets/svgs"


type CardProps = {
  color: string,
  title: string,
  subtitle?: string,
  icon?: JSX.Element,
  iconColor?: string,
  children?: JSX.Element[],
}

function CardCut({title, subtitle, children, color, icon, iconColor}: CardProps) {


  return (
  //  {/* Cropped Card */}
   <div className="w-80 flex-1 h-fit group">
    <div className='flex'>
      <div className={'grow rounded-t-3xl ' + color + ' pt-6 px-6'}>
        <h1 className="text-xl font-bold text-neutral-content">{title}</h1>
        <p className="font-medium text-primary">{subtitle}</p>
      </div>
      <div className={color + ' rounded-tl-[1.6rem] rounded-tr-[1.6rem] rounded-br-[1.6rem]'}>
        <div className='bg-accent p-3 rounded-bl-[2.5rem]'>
          <div className={`flex items-center justify-center rounded-full ${iconColor ? iconColor : 'bg-primary'} p-4`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
    <div className='rounded-tr-3xl rounded-b-3xl bg-neutral p-3 '>
      {/* Child objects */}
      {children?.map(child => 
        child  
      )}
      
      {/* Add Object */}
      <div className="h-0 transition-all flex justify-center items-center duration-500 ease-in-out group-hover:h-20 hover:bg-primary bg-accent group-hover:p-4 group-hover:mt-2 rounded-3xl">
        <Plus color="opacity-0 duration-500 ease-in-out group-hover:opacity-[1] fill-accent-content" height={24} width={24}/>
      </div>
    </div>
    
  </div>
   
)
}

export default CardCut
