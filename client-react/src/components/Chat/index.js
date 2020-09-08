import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket

const Chat = ({ location }) => {
  const [nameSession, setNameSession] = useState('')
  const [roomSession, setRoomSession] = useState('')
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io(ENDPOINT)

    setNameSession(name)
    setRoomSession(room)
    console.log({ nameSession, roomSession })

    socket.emit('join', { name, room }, () => {})

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])
  return <h1>Chat</h1>
}

export default Chat
