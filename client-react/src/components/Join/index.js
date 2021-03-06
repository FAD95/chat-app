import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { JoinForm, FormName, Button, Hr } from './styles'
import { FlexContainer } from '../../styles/utils'
const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const handleSubmitError = (e) => {
    e.preventDefault()
    if (!name) {
      alert('You have to enter a name')
    }
    if (!room) {
      alert('You have to enter the room')
    }
  }

  return (
    <FlexContainer>
      <JoinForm>
        <FormName>Join</FormName>
        <Hr />
        <div className='form-group mt-5'>
          <input
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
            className='form-control'
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? handleSubmitError(e) : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button className='btn mt-3' type='submit'>
            Sign In
          </Button>
        </Link>
      </JoinForm>
    </FlexContainer>
  )
}

export default Join
