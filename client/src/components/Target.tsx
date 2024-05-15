import { TargetProps } from '@/types'
import React from 'react'

const Target = ({ username, target, setJoined, setStarted }: TargetProps) => {
  const newGame = () => {
    setJoined(false)
    setStarted(false)
  }

  return (
    <div className='flex min-h-screen flex-col items-center p-24 gap-y-4'>
      <div>{`${username}, your target is ${target}.`}</div>
      <button className="w-48 h-16 bg-slate-800 rounded-md" onClick={newGame}>New game</button>
    </div>
  )
}

export default Target