import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  .local {
    background-color: rgba(81, 99, 149, 0.5);
    margin-left: auto !important;
    padding: 5px;
    margin-left: auto;
    margin-right: 10px;
  }
  .remote-wrapper {
    display: flex;
    align-items: center;
  }
  .remote {
    margin-left: 10px;
    background-color: white;
    justify-self: right;
    padding: 5px;
  }
`

export const Container = styled.div`
  position: relative;
  align-items: baseline;
  height: 100%;
  min-width: 212px;
  max-width: 600px;
  min-height: 50px;
  max-width: 80%;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  p {
    word-wrap: break-word;
    width: 100%;
    z-index: 1;
  }
  h5 {
    margin: 0;
    font-size: 12px;
  }
`
export const Time = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0;
  font-size: 12px;
`
