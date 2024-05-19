"use client"

import { useRef, useState } from "react";
import { Login, Lobby, Target } from "../components";
import { bowlby_one_sc, useDimensions } from "@/utils";

export default function Home() {
  const [username, setUsername] = useState("")
  const [target, setTarget] = useState("")
  const [joined, setJoined] = useState(false)
  const [started, setStarted] = useState(false)

  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const gradient = {
    normal: "flex min-h-screen justify-center bg-gradient-to-b to-green-300 from-green-100 transition-all duration-150",
    target: "flex min-h-screen justify-center bg-gradient-to-b to-red-300 from-white transition-all duration-150"
  }

  const container = {
    normal: "bg-green-100 mx-6 shadow-lg rounded-xl transition-all",
    target: "bg-red-100 mx-6 shadow-lg rounded-xl transition-all"
  }

  return (
    <main>
      <div className={started ? gradient.target : gradient.normal}>
        <div className='relative flex grow flex-col gap-4 justify-center'>
          <h1 className={`${bowlby_one_sc.className} text-center text-5xl font-bold text-gray-600`}>Card Assassins</h1>
          <div className="overflow-hidden">
            <div ref={containerRef} className="absolute flex flex-col items-center inset-x-6 pb-8 pt-12 gap-y-4">
              {
                joined
                  ? (started
                    ? <Target username={username} target={target} setJoined={setJoined} setStarted={setStarted} />
                    : <Lobby username={username} setJoined={setJoined} setStarted={setStarted} setTarget={setTarget} />)
                  : <Login username={username} setUsername={setUsername} setJoined={setJoined} />
              }
            </div>
          </div>
          <div className={started ? container.target : container.normal} style={
            {
              height: `${height}px`
            }}
          />
          <h1 className={`${bowlby_one_sc.className} text-center text-gray-600 font-medium`}>Grad Party 2024</h1>
        </div>
      </div>
    </main>
  );
}