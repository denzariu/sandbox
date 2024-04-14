import { useEffect, useRef } from 'react';
import p5, { Image, Color } from 'p5';
import Logo from '../../../assets/logo.png'



let scale: {
  x: number,
  y: number
} = {x: 0, y: 0}


type SketchProps = {
  circleScale: number,
  windowSize: {width: number, height: number},
  step: {X: number, Y: number},
  image: File | null,
  colorize: boolean
}

const Sketch = ({ circleScale, windowSize, step, image, colorize }: SketchProps) => {
  const canvasParentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<p5>();

  let img: Image;

  useEffect(() => {
    if (canvasParentRef.current) {
      const parent = canvasParentRef.current;
      canvasRef.current?.remove()
      canvasRef.current = new p5((p: p5) => {
        p.preload = () => {
          img = p.loadImage(image ? URL.createObjectURL(image) : Logo); // Update the path to your image
        };

        p.setup = () => {
          const canvas = p.createCanvas(parent.offsetWidth, parent.offsetHeight);
          canvas.parent(parent);
          p.noLoop(); // Ensure draw() is only called once
          analyzePixels(p)
        };

        // p.draw = () => {}

        p.windowResized = () => {
          p.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
          analyzePixels(p);
        };
      });
    }

    return () => {
      canvasRef.current?.remove();
    };
  }, [circleScale, windowSize, step, image, colorize]);
  
  useEffect(() => {
    if(canvasRef.current)
    try{
      canvasRef.current?.clear()
    } catch (e) {
      console.log(e)
    }
  }, [])

  const analyzePixels = (p: p5) => {
    if (!img) return;
  
    p.clear(); // Clear the canvas
    // p.image(img, 0, 0, p.width, p.height);
    p.noStroke();
    scale.y = windowSize.height / img.height;
    scale.x = windowSize.width / img.width;
  
    for (let x = 0; x < img.width; x += step.X) {
      for (let y = 0; y < img.height; y += step.Y) {
        //@ts-ignore
        const c: Color = img.get(x, y);
        const brightness = p.brightness(c);
        if (brightness === 0) continue
        // Adjust circle size based on brightness or other criteria
        const adjustedSize = p.map(brightness, 0, 255, 1, circleScale * 10);
  
        //@ts-ignore - Draw circles based on color and position
        colorize ? p.fill(c) : p.fill(100, 100, 250, c[4])

        p.ellipse(x*scale.x + adjustedSize / 2, y*scale.y + adjustedSize / 2, adjustedSize, adjustedSize);
      }
    }
  };

  return <div ref={canvasParentRef} className='h-96 w-96 scale-75 sm:scale-100' />;

  
};




export default Sketch;
