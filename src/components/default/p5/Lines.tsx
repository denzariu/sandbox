import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';


type LinesProps = {
  windowSize?: {width: number, height: number},
}

const Lines = ({ windowSize}: LinesProps) => {
  const [resize, setResize] = useState(true)
  const canvasParentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<p5>();

  useEffect(() => {
    if (canvasParentRef.current) {
      const parent = canvasParentRef.current;
      canvasRef.current?.remove()
      
      canvasRef.current = new p5((p: p5) => {
        p.preload = () => {
    
        };

        p.setup = () => {
          let width = parent.offsetWidth
          let height = parent.offsetHeight

          const canvas = p.createCanvas(width, height);
          canvas.parent(parent)

          p.background(0);
          
          // p.mousePressed(canvasClickedEvent);

        };

        p.draw = () => {
          p.strokeWeight(0.6);
          let frame = 0;
          let numAcross = 45;
          let size1 = (parent.offsetWidth - frame * 2) / numAcross;
          let rez3 = 0.003;
          let len = size1 * 0.5;
          let coordinate = {
            x: Math.random(), 
            y: Math.random() //0.9 = lines, 0.3~0.5 = more like eyes
          }
          console.log(coordinate)
          drawLines(p, frame, parent.offsetWidth, parent.offsetHeight, size1, len, rez3, coordinate.x, coordinate.y);
          
          setResize(false)
          p.noLoop()
        }

        p.windowResized = () => {
          p.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
        };

      });
    }

    return () => {
      canvasRef.current?.remove(); 
    };
  }, [ windowSize, resize ]);
  
  
  
  function drawLines(p: any, frame: any, width: any, height: any, size1: any, len: any, rez3: any, coordinateX: any, coordinateY: any) {
    for (let x = frame; x < width - frame + 1; x += size1) {
        for (let y = frame; y < height - frame + 1; y += size1) {
            x += width * Math.random() * 2 / 1000 - 0.001;
            y += width * Math.random() * 2 / 1000 - 0.001;
            let oldX = x;
            let oldY = y;
            for (let i = 0; i < 20; i++) {
                let n3 = p.noise(oldX * rez3, oldY * rez3) + 0.03;
                let ang = p.map(n3, coordinateX, coordinateY, 0, Math.PI * 2);
                let newX = Math.cos(ang) * len + oldX;
                let newY = Math.sin(ang) * len + oldY;

                if (Math.random() > 0.3) {
                    p.stroke(220, 20, 100); 
                    p.line(oldX, oldY, newX, newY);
                } else if (Math.random() > 0.8) {
                    p.stroke(20, 20, 220);
                    p.line(oldX, oldY, newX, newY);
                }

                oldX = newX;
                oldY = newY;
            }
        }
    }
  }
  

  return (
    <>
      <button onClickCapture={() => setResize(true)} className='absolute self-center top-[50%] border-2 border-secondary py-2 px-4 rounded-full bg-accent z-10'>Reset</button>
      <div ref={canvasParentRef} className='absolute -top-4 scale-100 h-full w-full overflow-hidden z-0'/>;  
    </>
  )
};


export default Lines;
