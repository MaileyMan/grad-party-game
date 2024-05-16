import { TargetProps } from '@/types'
import React from 'react'

const Target = ({ username, target, setJoined, setStarted }: TargetProps) => {
  const newGame = () => {
    setJoined(false)
    setStarted(false)
  }

  return (
    <>
      <div className='text-gray-700 font-bold'>{`${username}, your target is ${target}.`}</div>
      <button className="flex bg-white p-2 rounded-md shadow-xl" onClick={newGame}>
        <div className='flex items-center gap-x-1'>
          <p className='text-md text-gray-700 font-light align-middle'>New game</p>
          <img src='/play_arrow.svg' width={25} />
        </div>
      </button>
    </>
  )
}

export default Target