import { useQuery } from 'react-query';
import { PlayerLeft, PlayerPause, PlayerPlay, PlayerRight } from '../../../assets/svgs'
import { useEffect, useId, useState } from 'react';

function Player() {

  const url: string = 'https://picsum.photos/200';
  
  const [playing, setPlaying] = useState<boolean>(true)
  const [elapsed, setElaspedTime] = useState<number>(0);
  const [elapsedMinutes, setElaspedTimeMinutes] = useState<string>('0:00');
  const length: number = 197; 
  
  // Start with an interval
  useEffect(() => {
    let timeout: number | undefined = undefined;
    if (playing) {
      timeout = setInterval(() => setElaspedTime((prev) => prev < length ? (prev+1) : (prev)), 1000)
    }
    else
     clearInterval(timeout)

    return () => {
      if(timeout !== undefined) clearInterval(timeout);
    };
  }, [playing]);

  // Update time in minutes when time increases
  useEffect(() => {
    setElaspedTimeMinutes(timeInMinutes(elapsed))
  }, [elapsed])

  const image = useQuery('albumImage',  async () => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    
    return response
  })

  const timeInMinutes = (time: number) => {

    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    const timeInMinutes: string = 
      minutes.toString() + ':' + 
      (seconds < 10 ? '0' + seconds.toString() : seconds.toString())

    return timeInMinutes
  }
   

  return (
    <div className='p-5 flex-1 space-y-4 
      bg-gradient-to-b 
      from-primary from-[-50%]
      to-secondary to-[150%]
      rounded-xl'
      key={useId()}
    >
      {/* Image and song name */}
      <div className='flex space-x-3'>
        {image.isLoading ?
          <div className='w-[64px] h-[64px] rounded-md bg-gradient-to-b from-neutral to-primary to-[250%]'/>
         : <img src={image.data?.url}
            height={64} width={64} 
            className='rounded-md' 
          />
        }
        <div className='text-accent-content flex flex-col justify-center'>
          <p className='font-medium'>Redbone</p>
          <p className='text-primary-content'>Childish Gambino</p>
        </div>
      </div>
      
      {/* Time elapsed */}
      <div className='flex justify-between space-x-4 text-center text-primary-content'>
        <p className='w-8'>{elapsedMinutes}</p>
        <input 
          className='flex-1 range range-accent range-xs self-center' 
          type='range'
          min={0}
          max={length}
          // defaultValue={elapsed}
          value={elapsed}
          onChange={(event) => setElaspedTime(Number(event.target.value))}
        />
        <p className='w-8'>{timeInMinutes(length)}</p>
      </div>

      {/* Buttons */}
      <div className='flex justify-center items-center gap-x-4'>
        <PlayerLeft width={32} height={32} color='fill-primary-content'/>
        <button 
          onClick={() => setPlaying(!playing)} 
          className='p-2 bg-primary-content rounded-full'
        >
          {playing ? 
            <PlayerPause width={32} height={32} color='fill-secondary'/>
          : <PlayerPlay width={32} height={32} color='fill-secondary'/>
          }
        </button>
        <PlayerRight width={32} height={32} color='fill-primary-content'/>
      </div>
    </div>
  )
}

export default Player
