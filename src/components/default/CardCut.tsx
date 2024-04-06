

type CardProps = {
  color: string,
  title: string,
  subtitle?: string,
  icon?: JSX.Element,
  children?: JSX.Element[],
}

function CardCut({title, subtitle, children, color, icon}: CardProps) {


  return (
  //  {/* Cropped Card */}
   <div className="relative flex-1 h-fit">
    <div className='flex'>
      <div className={'grow rounded-t-3xl ' + color + ' pt-6 px-6'}>
        <h1 className="text-xl font-bold text-neutral-content">{title}</h1>
        <p className="font-medium text-primary">{subtitle}</p>
      </div>
      <div className={color + ' rounded-tl-[1.6rem] rounded-tr-[1.6rem] rounded-br-[1.6rem]'}>
        <div className='bg-accent p-3 rounded-bl-[2.5rem]'>
          <div className='flex items-center justify-center rounded-full bg-primary p-4'>
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
    </div>
  </div>
   
)
}

export default CardCut
