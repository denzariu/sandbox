import { useState } from 'react'
import Sketch from './Sketch';

function SketchWrapper() {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [colorize, setColorize] = useState<boolean>(false)
  const [circleScale, setCircleScale] = useState(5)
  const [circleSize, setCircleSize] = useState({
    X: 45,
    Y: 45
  })
  const [windowSize] = useState({
    width: 384,
    height: 384
  })
  
  return (
    <>
      <Sketch 
        circleScale={circleScale} 
        windowSize={windowSize} 
        step={circleSize} 
        image={selectedImage} 
        colorize={colorize}
      /> 
    
    <div className='fixed flex flex-col p-4 bg-primary sm:right-0 bottom-0 rounded-t-2xl sm:rounded-tr-none font-semibold text-primary-content space-y-2'>

      {/* True Color */}
      <label className="label cursor-pointer">
        <span>Monochromatic</span> 
        <input type="checkbox" className="checkbox checkbox-accent" 
          checked={!colorize} 
          onChange={() => setColorize(prev => !prev)}
        />
      </label>

      {/* Scale */}
      <label>
        <span>Circle Scale</span>
        <div className='flex gap-4'>
          <input 
            className='flex-1 range range-accent range-xs self-center' 
            type='range' 
            onChange={(e) => setCircleScale(Number(e.target.value))} 
            min={2} 
            max={12}
            defaultValue={circleScale}
          />
          <h3 className='w-4 flex justify-center'>{circleScale}</h3>
        </div>
      </label>

      {/* Multiplier */}
      <label>
        <span>Circle Multiplier</span>
        <div className='flex gap-4'>
          <input 
            className='flex-1 range range-accent range-xs self-center' 
            type='range' 
            onChange={(e) => setCircleSize({
              X: Number(e.target.value), 
              Y: Number(e.target.value)
            })} 
            min={10} 
            max={60}
            defaultValue={circleSize.X}
          />
          <h3 className='w-4 flex justify-center'>{circleSize.X}</h3>
        </div>
      </label>

      {/* Image */}
      <input
        type="file"
        name="myImage"
        className='file-input file-input-bordered w-full max-w-xs'
        onChange={(event) => {
          if (event && event.target && event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
          }
        }}
      />
      </div>
    </>
  )
}

export default SketchWrapper
