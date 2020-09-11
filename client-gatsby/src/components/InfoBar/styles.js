import styled from 'styled-components'
import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
    0% {box-shadow: 0 0 0 rgba(0, 255, 0, 0.5)}
    30% {box-shadow: 0 0 4px rgba(0, 255, 0, 1)}
    40% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.3) }
    100% { box-shadow: 0 0 2px rgba(0, 255, 0, 0.6)}
`

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  background: #614385;
  .online-logo {
    box-sizing: border-box;
    color: #00c100;
    border-radius: 50%;
    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
`
export const CloseLink = styled.a`
  color: #ff8c0a;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${CloseLink}:hover & {
    color: red;
  }
`

export const RoomTitle = styled.h3`
  margin: 0 0 0 10px;
  color: white;
  font-size: 20px;
`
