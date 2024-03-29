import styled from 'styled-components'
import { TiArrowSortedDown } from 'react-icons/ti'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const PlayerScreen = styled.div`
  display: flex;
  width: 100vw;
  overflow: scroll;
  flex-direction: ${props => props.vertical ? 'column-reverse' : 'row'};
  background-color: rgba(255,255,255, 0.5);
  height: ${props => props.vertical ? '100%' : '56.25vw'}; /* height:width ratio = 9/16 = .5625  */
  max-height: 100vh;
  max-width: 177.78vh; /* 16/9 = 1.778 */
  margin: auto;
  padding: 10px  0;
  position: absolute;
  top:0; /* vertical center */
  /* bottom:0; */
  left:0;right:0; /* horizontal center */
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
  button{
    align-self: center;
    border-radius: 30px;
    border: none;
    padding: 7px 20px;
    min-height: 44px;
    background-color: rgb(19, 212, 205);
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    transition-duration: 200ms;
  }
  button:hover {
      opacity: 0.8;
      font-size: 24px;
    }

`
export const QuestionNumber = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  transition-duration: 200ms;
  cursor: pointer;
  &:hover{
    transform: scale(1.1)
  }
`
export const Question = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`
export const Response = styled.h4`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const DrawContainer = styled.div`
  display: flow-root;
  flex: 1;
  img {
    max-width: 100%;
    object-fit: contain;
    margin: auto;
    display: flex;
  }
`
export const LeftArrow = styled.div`
  display: flex;
  position: absolute;
  width: 20%;
  bottom: 0;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`
export const RightArrow = styled.div`
  display: flex;
  position: absolute;
  width: 20%;
  bottom: 0;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`

export const IconArrowDown = styled(TiArrowSortedDown)`
`
