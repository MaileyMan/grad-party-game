import React from 'react'
import { LoginProps } from '@/types'

const Login = ({ username, setUsername, setJoined }: LoginProps) => {

  const joinGame = () => {
    if (username) {
      setJoined(true)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-t from-green-200 to-gray-800 p-2 rounded-lg shadow-xl">
        <img className='' src='/card-game.png' width={80} />
      </div>
      <input
        className="h-8 rounded-md p-2 mt-4 bg-white text-gray-700 shadow-xl focus:outline-none focus:shadow-outline"
        placeholder="Name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="flex bg-white p-2 rounded-md shadow-xl"
        onClick={joinGame}
      >
        <div className='flex items-center gap-x-1'>
          <p className='text-md text-gray-700 font-light align-middle'>Join game</p>
          <img src='/play_arrow.svg' width={25} />
        </div>
      </button>
    </>
  )
}

export default Login