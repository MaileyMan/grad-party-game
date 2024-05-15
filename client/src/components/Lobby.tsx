import React, { useEffect, useState } from 'react'
import { Carousel } from '.'
import { jsonMessages, LobbyProps } from '@/types'
import useWebSocket from "react-use-websocket";

const Lobby = ({ username, setJoined, setStarted }: LobbyProps) => {
  const WS_URL = 'ws://127.0.0.1:8000'

  const { sendJsonMessage, lastJsonMessage }: jsonMessages = useWebSocket(WS_URL, {
    queryParams: { username }
  })

  const [connected, setConnected] = useState(false)

  const startGame = () => {
    sendJsonMessage({
      start: true
    })
    setStarted(true)
  }

  const leaveGame = () => {
    setJoined(false)
  }

  useEffect(() => {
    if (!lastJsonMessage) {
      return
    }

    setConnected(true);

    if (lastJsonMessage.started) {

    }
  }, [lastJsonMessage])

  return (
    <div className='flex min-h-screen flex-col items-center p-24 gap-y-4'>
      {connected
        ? (<>
          <p>{`Hello, ${username}`}</p>
          {connected && <Carousel players={lastJsonMessage.players} />}
          <div className='flex gap-2'>
            <button className="w-48 h-16 bg-slate-800 rounded-md" onClick={startGame}>Start game</button>
            <button className="w-48 h-16 bg-slate-800 rounded-md" onClick={leaveGame}>Leave game</button>
          </div>
        </>)
        : <button className="w-48 h-16 bg-slate-800 rounded-md" onClick={leaveGame}>Leave game</button>
      }
    </div>
  )
}

export default Lobby