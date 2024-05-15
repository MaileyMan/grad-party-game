"use client"

import { useState } from "react";
import { Login, Lobby } from "../components";

export default function Home() {
  const [username, setUsername] = useState("")
  const [target, setTarget] = useState("")
  const [joined, setJoined] = useState(false)
  const [started, setStarted] = useState(false)

  return (
    <main>
      {
        joined
          ? <Lobby username={username} setJoined={setJoined} setStarted={setStarted} />
          : <Login username={username} setUsername={setUsername} setJoined={setJoined} />
      }
    </main>
  );
}
