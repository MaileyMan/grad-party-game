"use client"

import { useState } from "react";
import { Login, Lobby, Target } from "../components";

export default function Home() {
  const [username, setUsername] = useState("")
  const [target, setTarget] = useState("")
  const [joined, setJoined] = useState(false)
  const [started, setStarted] = useState(false)

  return (
    <main>
      <div className='flex min-h-screen justify-center bg-gradient-to-b to-green-300 from-green-100'>
        <div className='flex flex-col gap-4 justify-center'>
          <h1 className='text-center text-5xl font-bold text-gray-600'>Card Assassins</h1>
          <div className="flex flex-col items-center p-24 pb-16 pt-12 gap-y-4 rounded-xl bg-green-100 shadow-lg">
            {
              joined
                ? (started
                  ? <Target username={username} target={target} setJoined={setJoined} setStarted={setStarted} />
                  : <Lobby username={username} setJoined={setJoined} setStarted={setStarted} setTarget={setTarget} />)
                : <Login username={username} setUsername={setUsername} setJoined={setJoined} />
            }
          </div>
          <h1 className='text-center font-bold text-gray-600'>Grad Party 2024</h1>
        </div>
      </div>
    </main>
  );
}
