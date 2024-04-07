import { useId } from "react"
import { Plus } from "../../../assets/svgs"

function AddComponent() {
  return (
    <div key={useId()} className="h-0 transition-all flex justify-center items-center duration-500 ease-in-out group-hover:h-20 hover:bg-primary bg-accent group-hover:p-4 group-hover:mt-3 rounded-xl">
      <Plus color="opacity-0 duration-500 ease-in-out group-hover:opacity-[1] fill-accent-content" height={24} width={24}/>
    </div>
  )
}

export default AddComponent
