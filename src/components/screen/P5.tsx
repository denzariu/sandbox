import React, { useState } from 'react';
import Sketch from '../default/p5/Sketch';

const P5: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [colorize, setColorize] = useState<boolean>(false)
  const [circleScale, setCircleScale] = useState(5)
  const [circleSize, setCircleSize] = useState({
    X: 45,
    Y: 45
  })
  const [windowSize, setWindowSize] = useState({
    width: 384,
    height: 384
  })


  return (
    <div className='space-y-4 flex flex-col items-center'>
      <h1 className='text-center text-2xl font-semibold text-'>
        This page uses P5.js, a JavaScript library for creative coding.
      </h1>
      <Sketch 
        circleScale={circleScale} 
        windowSize={windowSize} 
        step={circleSize} 
        image={selectedImage} 
        colorize={colorize}
      /> 

      <div className='fixed flex flex-col p-4 bg-primary right-0 bottom-0 rounded-tl-lg font-semibold text-primary-content space-y-2'>

        {/* Image */}
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            if (event && event.target && event.target.files && event.target.files[0]) {
              setSelectedImage(event.target.files[0]);
            }
          }}
        />

        {/* True Color */}
        <label className="label cursor-pointer">
          <span>Monochromatic</span> 
          <input type="checkbox" className="checkbox checkbox-accent" 
            checked={!colorize} 
            onChange={(e) => setColorize(prev => !prev)}
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
      </div>
    </div>
  )
};

export default P5;
