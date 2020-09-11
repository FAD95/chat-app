import React from 'react'
import { RiRadioButtonLine, RiCloseCircleFill } from 'react-icons/ri'
import { Container, GeneralContainer, RoomTitle, CloseLink } from './styles'

const InfoBar = ({ room }) => (
  <GeneralContainer>
    <Container>
      <RiRadioButtonLine size={12} className='online-logo' />
      <RoomTitle>{room}</RoomTitle>
    </Container>
    <Container>
      <CloseLink href='/'>
        <RiCloseCircleFill size={20} />
      </CloseLink>
    </Container>
  </GeneralContainer>
)

export default InfoBar
