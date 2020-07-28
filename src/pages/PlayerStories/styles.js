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
  flex-direction: row;
  background-color: rgba(255,255,255, 0.5);
  flex-wrap: wrap-reverse;
  height: 100%;
  margin: auto;
  padding: 10px  0;
  position: absolute;
  top:0; 
  left:0;
  right:0;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
  min-width: 400px;
`
export const ItemText = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`
export const DrawContainer = styled.div`
  display: flex;
  flex: 1;
  min-width: 400px;
  img {
    max-width: 100%;
    object-fit: contain;
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
