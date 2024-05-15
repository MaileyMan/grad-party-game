import React from 'react'
import { LoginProps } from '@/types'

const Login = ({ username, setUsername, setJoined }: LoginProps) => {

  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-y-4">
      <div className="bg-white h-16 w-16 rounded-lg">

      </div>
      <input
        className="h-8 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline"
        placeholder="Name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-gray-700 p-2 rounded-md"
        onClick={() => setJoined(true)}
      >
        Join game
      </button>
    </div>
  )
}

export default Login