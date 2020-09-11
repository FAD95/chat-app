import React from 'react'
import { MessageInput } from './styles'
const Input = ({ setMessage, sendMessage, message }) => {
  const getTime = () => {
    const date = new Date()
    let hour = date.getHours()
    let minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const time = hour + ':' + minutes
    return time
  }
  return (
    <form>
      <MessageInput className='input-group'>
        <input
          className='form-control'
          type='text'
          value={message.text}
          onChange={(e) =>
            setMessage({ text: e.target.value, date: getTime() })
          }
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
          placeholder='Type a message...'
        />
        <button onClick={(e) => sendMessage(e)} className='btn btn-primary'>
          Send
        </button>
      </MessageInput>
    </form>
  )
}

export default Input
