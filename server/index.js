import { createServer } from 'http'
import { WebSocketServer } from 'ws'

import { parse } from 'url'
import { v4 as uuidv4 } from "uuid"

const server = createServer()
const wsServer = new WebSocketServer({ server })
const port = 8000

const connections = {}
const users = {}
let started = false

const broadcastPlayers = () => {
  Object.keys(connections).forEach(uuid => {
    const connection = connections[uuid]
    const message = JSON.stringify({
      started: started,
      players: Object.values(users)
    })
    connection.send(message)
  })
}

const handleMessage = (bytes, uuid) => {
  const message = JSON.parse(bytes.toString())
  const user = users[uuid]

  if (message.received) {
    connection.close()
    handleClose(uuid)
  }
  else if (message.start && !started) {
    console.log(`${user.username} has started the game.`)
    broadcastStart()
    timeoutServer()
  }
}

const handleClose = uuid => {
  console.log(`${users[uuid].username} disconnected`)
  delete connections[uuid]
  delete users[uuid]

  broadcastPlayers()
}

const broadcastStart = () => {
  const players = Object.keys(users)
  started = true

  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }

  Object.keys(connections).forEach(uuid => {
    const connection = connections[uuid]
    const target = players[(players.indexOf(uuid) + 1) % players.length]
    const message = JSON.stringify({
      started: started,
      target: users[target]
    })
    connection.send(message)
  })
}

const timeoutServer = () => {
  setTimeout(() => {
    clearServer()
  }, 10000)
}

const clearServer = () => {
  Object.values(connections).forEach(connection => {
    connection.close()
  })

  started = false

  console.log('Server has been cleared')
}

wsServer.on("connection", (connection, request) => {
  const { username } = parse(request.url, true).query
  const uuid = uuidv4()
  console.log(username)
  console.log(uuid)

  connections[uuid] = connection

  users[uuid] = {
    username,
    state: {}
  }

  broadcastPlayers()

  connection.on("message", message => handleMessage(message, uuid))
  connection.on("close", () => handleClose(uuid))
})

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`)
})