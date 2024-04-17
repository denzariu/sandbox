import React, { useMemo, useState } from 'react';
import Lines from '../default/p5/Lines';
import SketchWrapper from '../default/p5/SketchWrapper';

const P5: React.FC = () => {

  
  const [currentCanvas, setCanvas] = useState<'sketch' | 'vessels'>('sketch')
  const canvasSelect = useMemo(() => {
    switch (currentCanvas) {
      case 'sketch': 
        return <SketchWrapper/>
      case 'vessels': 
        return <Lines/>
        // return <></>
    }
  }, [currentCanvas])


  return (
    <div className='space-y-4 flex flex-col items-center w-full'>
      
      <div  className='inline -mt-10 space-x-2 border-2 border-secondary py-2 pt-6 px-4 rounded-full bg-accent z-10'>
        <button onClick={() => setCanvas('sketch')} className={currentCanvas === 'sketch' ? 'font-bold' : 'hover:text-primary'}>Sketch</button>
        <button onClick={() => setCanvas('vessels')} className={currentCanvas === 'vessels' ? 'font-bold' : 'hover:text-primary'}>Vessels</button>        
      </div>

      <h1 className='text-center text-2xl font-semibold text-secondary'>
        This page uses P5.js, a JavaScript library for creative coding.
      </h1>

      {canvasSelect}
      
    </div>
  )
};

export default P5;
