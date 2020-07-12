import styled from 'styled-components'
import { BsInfoSquare, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { GoHome } from 'react-icons/go'
import { AiOutlineCloseSquare, AiOutlineClose, AiOutlineUnorderedList } from 'react-icons/ai'
import { MdSpaceBar, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  flex: 1;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom-right-radius: 10px;
  z-index: 5;
  background-color: rgb(19, 212, 205);
  padding: 10px;
  align-items: center;
  justify-content: ${props => props.expanded ? 'space-between' : 'center'} ;
  transition-duration: 400ms;
  width: ${props => props.expanded ? '320px' : '70px'} ;
  a {
    text-decoration: none;
  }
`
export const IconContainer = styled.div`
  display: flex;
  margin: 0 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    color: #fff;
    text-decoration: none;
    font-weight: 600
  }
`
export const LinkContainer = styled(Link)`
  display: flex;
  margin: 0 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    color: #fff;
    text-decoration: none;
    font-weight: 600
  }
`
export const IconMenu = styled(MdMenu)`
  transition-duration: 200ms;
  &:hover{
    transform: scale(1.1)
  }
`
export const IconMenuClose = styled(AiOutlineClose)`
  transition-duration: 200ms;
  &:hover{
    transform: scale(1.2)
  }
`
export const IconHome = styled(GoHome)`
  transition-duration: 200ms;
  &:hover{
    transform: scale(1.1)
  }
`
export const IconList = styled(AiOutlineUnorderedList)`
  transition-duration: 200ms;
  &:hover{
    transform: scale(1.1)
  }
`

export const IconInfo = styled(BsInfoSquare)`
  transition-duration: 200ms;
  cursor: pointer;
  &:hover{
    transform: scale(1.1)
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  z-index: 6;
  position: absolute;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-height: 400px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 90%;
  align-items: center;
  justify-content: center;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`

export const IconClose = styled(AiOutlineCloseSquare)`
  transition-duration: 200ms;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  &:hover{
    transform: scale(1.1)
  }
`
export const IconLeft = styled(BsArrowLeft)`
  transition-duration: 200ms;
  animation: slideLeft 2s infinite;
  @keyframes slideLeft {
    0% { transform: translateX(0px); }
    50% { transform: translateX(-5px); }
    100% { transform: translateX(0px); }
  }
`
export const IconRight = styled(BsArrowRight)`
  animation: slideRight 2s infinite;
  transition-duration: 200ms;
  @keyframes slideRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(0px); }
  }
`
export const IconSpace = styled(MdSpaceBar)`
  animation: slideUp 2s infinite;
  transition-duration: 200ms;
  @keyframes slideUp {
    0% { transform: translateY(0px); }
    50% { transform: translateY(5px); }
    100% { transform: translateY(0px); }
  }
`
