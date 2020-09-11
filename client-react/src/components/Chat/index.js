import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar'
import Messages from '../Messages'
import Input from '../Input'
import { Container } from './styles'
import { FlexContainer } from '../../styles/utils'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const [message, setMessage] = useState([{}])
  const [messages, setMessages] = useState([])

  const ENDPOINT = 'https://chat-app-fad.herokuapp.com/'

  useEffect(() => {
    const data = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(data.name)
    setRoom(data.room)

    socket.emit('join', { name: data.name, room: data.room }, () => {})

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
      socket.emit('sendMessage', message, () => setMessage({}))
      setMessage({ text: '' })
    }
  }
  return (
    <FlexContainer>
      <Container>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
        />
      </Container>
    </FlexContainer>
  )
}

export default Chat
