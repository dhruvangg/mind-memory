import React, { useEffect, FC } from 'react'
import { useNumber } from "../context/NumberContext"

const Number: FC = () => {
  const progressRef = React.useRef<HTMLDivElement>(null)
  const { number, updateNumber } = useNumber()

  if (progressRef.current)
    progressRef.current.style.width = '0';

  useEffect(() => {
    updateNumber(Math.floor(100000 + Math.random() * 900000))
  }, [])

  return (
    <>
      <div className='neon text-5xl tracking-widest'>{number}</div>
      <div className={`absolute bottom-0 left-0 transition-all h-1 bg-[#fff6a9] transition-all duration-3000 ease-in w-full`} ref={progressRef}>&nbsp;</div>
    </>
  )
}

export default Number;