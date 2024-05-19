import React, { useEffect, useState } from 'react'
import { Carousel } from '.'
import { jsonMessages, LobbyProps } from '@/types'
import useWebSocket from "react-use-websocket";

const Lobby = ({ username, setJoined, setStarted, setTarget }: LobbyProps) => {
  const WS_URL = 'ws://34.243.245.176'

  const { sendJsonMessage, lastJsonMessage }: jsonMessages = useWebSocket(WS_URL, {
    queryParams: { username },
    onClose: () => onDisconnect()
  })

  const [connected, setConnected] = useState(false)
  const [message, setMessage] = useState("")

  const startGame = () => {
    sendJsonMessage({
      start: true
    })
  }

  const leaveGame = () => {
    setJoined(false)
  }

  const onStart = () => {
    setConnected(false)
    setTarget(lastJsonMessage.target.username)
    setStarted(true)
  }

  const onDisconnect = () => {
    setConnected(false)
  }

  useEffect(() => {
    if (!lastJsonMessage) {
      setMessage("Could not connect to server.")
      return
    }
    else if (lastJsonMessage.finished) {
      setMessage("Server is resetting.")
      return
    }

    setConnected(true);

    if (lastJsonMessage.started) {
      onStart()
    }
  }, [lastJsonMessage])

  return (
    <>
      {connected
        ? (<>
          <p className='font-bold text-gray-700'>{`Hello, ${username}.`}</p>
          {lastJsonMessage.players && <Carousel players={lastJsonMessage.players} />}
          <div className='mt-4 flex gap-2'>
            <button className="flex bg-white p-2 rounded-md shadow-xl" onClick={startGame}>
              <div className='flex items-center gap-x-1'>
                <p className='text-md text-gray-700 font-light align-middle'>Start game</p>
                <img src='/check_circle.svg' width={25} />
              </div>
            </button>
            <button className="flex bg-white p-2 rounded-md shadow-xl" onClick={leaveGame}>
              <div className='flex items-center gap-x-1'>
                <p className='text-md text-gray-700 font-light align-middle'>Leave game</p>
                <img src='/cancel.svg' width={25} />
              </div>
            </button>
          </div>
        </>)
        : (<>
          <p className='text-gray-700 font-bold'>{message}</p>
          <div className='flex justify-center'>
            <button className="flex grow-0 shrink min-w-0 bg-white p-2 rounded-md shadow-xl" onClick={leaveGame}>
              <div className='flex items-center gap-x-1'>
                <p className='text-md text-gray-700 font-light align-middle'>Cancel</p>
                <img src='/cancel.svg' width={25} />
              </div>
            </button>
          </div>
        </>)
      }
    </>
  )
}

export default Lobby