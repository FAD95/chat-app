import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
import { Wrapper } from './styles'
const Messages = ({ messages, name }) => (
  <Wrapper>
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => (
        <div key={i}>
          <Message name={name} message={message} />
        </div>
      ))}
    </ScrollToBottom>
  </Wrapper>
)

export default Messages
