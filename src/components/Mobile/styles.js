import styled from 'styled-components'

export const MobileWrapper = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 20px;
`
export const MobileContainer = styled.div`
    background: #fff;
    border: 15px solid #666;
    border-bottom-width: 50px;
    border-radius: 20px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, .1);
    display: flex;
    justify-content: space-between;
    height: 305px;
    margin: 0 30px;
    position: relative;
    width: 164px;
    &::before {
      background: #555;
      border: 2px solid #4a4a4a;
      border-radius: 50%;
      bottom: -45px;
      content: '';
      display: block;
      height: 30px;
      left: 50%;
      position: absolute;
      width: 30px;
      transform: translateX(-50%);
      z-index: 1;
    }
`
export const Left = styled.div`
  display: flex;
  height: 100%;
  width: 30px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  animation: blink 2s infinite;
  @keyframes blink {
    0% { opacity: 1 }
    50% { opacity: 0.8 }
    100% { opacity: 1 }
  }
`
export const Right = styled.div`
  display: flex;
  height: 100%;
  width: 30px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  animation: blink 2s infinite;
  @keyframes blink {
    0% { opacity: 0.5 }
    50% { opacity: 1 }
  }
`
