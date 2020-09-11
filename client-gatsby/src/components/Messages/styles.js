import styled from 'styled-components'
import { device } from '../../styles/utils'

export const Wrapper = styled.div`
  .messages {
    padding: 5% 0;
    overflow: auto;
    flex: auto;
    @media ${device.mobile} {
      height: 70vh;
    }
    @media ${device.laptop} {
      height: 500px;
    }
  }
`
