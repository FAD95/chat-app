import React from 'react'
import { Wrapper, Container, Time } from './styles'
import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text, date }, name }) => {
  let isSentByCurrentUser = false
  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }
  return (
    <Wrapper>
      {isSentByCurrentUser ? (
        <Container className='local'>
          <p>{ReactEmoji.emojify(text)}</p>
          <Time>{date}</Time>
        </Container>
      ) : (
        <Container className='remote'>
          <p>{ReactEmoji.emojify(text)}</p>
          <Time>{date}</Time>
          <h5>{user}</h5>
        </Container>
      )}
    </Wrapper>
  )
}

export default Message
