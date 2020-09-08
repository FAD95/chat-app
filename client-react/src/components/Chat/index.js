import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket

const Chat = ({ location }) => {
  const [nameSession, setNameSession] = useState('')
  const [roomSession, setRoomSession] = useState('')

  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])

  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setNameSession(name)
    setRoomSession(room)

    socket.emit('join', { name, room }, () => {})

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  console.log(messages)
  return (
    <div>
      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
          type='text'
        />
      </div>
    </div>
  )
}

export default Chat
