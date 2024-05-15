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
      {
        joined
          ? (started
            ? <Target username={username} target={target} setJoined={setJoined} setStarted={setStarted} />
            : <Lobby username={username} setJoined={setJoined} setStarted={setStarted} setTarget={setTarget} />)
          : <Login username={username} setUsername={setUsername} setJoined={setJoined} />
      }
    </main>
  );
}
