import styled from 'styled-components'
import { AiOutlineCloseSquare } from 'react-icons/ai'

export const ModalContainer = styled.div`
  display: flex;
  z-index: 6;
  flex: 1;
  position: absolute;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 45px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: center;
  align-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  overflow: scroll;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const QuestionNumber = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.selected ? '2px solid #000' : 'none'};
  background-color: rgb(19, 212, 205);
  border-radius: 6px;
  margin: 5px;
  color: #fff;
  font-size: 20px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(19, 212, 205,0.8);
  }
`
export const IconClose = styled(AiOutlineCloseSquare)`
  transition-duration: 200ms;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  &:hover{
    transform: scale(1.1)
  }
`
