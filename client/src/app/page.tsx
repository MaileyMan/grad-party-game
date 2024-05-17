"use client"

import { useState } from "react";
import { Login, Lobby, Target } from "../components";
import { bowlby_one_sc } from "@/utils";

export default function Home() {
  const [username, setUsername] = useState("")
  const [target, setTarget] = useState("")
  const [joined, setJoined] = useState(false)
  const [started, setStarted] = useState(false)

  const gradient = {
    normal: "flex min-h-screen justify-center bg-gradient-to-b to-green-300 from-green-100 transition-all duration-150",
    target: "flex min-h-screen justify-center bg-gradient-to-b to-red-300 from-white transition-all duration-150"
  }

  const container = {
    normal: "flex flex-col items-center mx-6 pb-16 pt-12 gap-y-4 rounded-xl bg-green-100 shadow-lg transition-all duration-150",
    target: "flex flex-col items-center mx-6 pb-16 pt-12 gap-y-4 rounded-xl bg-red-100 shadow-lg transition-all duration-150"
  }

  return (
    <main>
      <div className={started ? gradient.target : gradient.normal}>
        <div className='flex grow flex-col gap-4 justify-center'>
        <h1 className={`${bowlby_one_sc.className} text-center text-5xl font-bold text-gray-600`}>Card Assassins</h1>
          <div className={started ? container.target : container.normal}>
            {
              joined
                ? (started
                  ? <Target username={username} target={target} setJoined={setJoined} setStarted={setStarted} />
                  : <Lobby username={username} setJoined={setJoined} setStarted={setStarted} setTarget={setTarget} />)
                : <Login username={username} setUsername={setUsername} setJoined={setJoined} />
            }
          </div>
          <h1 className={`${bowlby_one_sc.className} text-center text-gray-600 font-medium`}>Grad Party 2024</h1>
        </div>
      </div>
    </main>
  );
}
