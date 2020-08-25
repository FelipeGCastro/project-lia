import styled from 'styled-components'
import { colors } from 'src/constants'

export const ContainerWrap = styled.div`
  display: flex;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 5;
  padding: 0 20px;
  background: none;
  justify-content: flex-end;
  align-items: center;
  background: none;
`
export const Container = styled.div`
  display: flex;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 5;
  justify-content: flex-end;
  align-items: center;
  background: none;
  transition: 200ms;
  background: ${colors.primaryGreen};
`
export const NavItem = styled.button`
  display: flex;
  z-index: 6;
  flex-shrink: 1;
  cursor: pointer;
  padding: 0 10px;
  border: none;
  background: none;
  height: 100%;
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-weight: 500;
  transition: 200ms;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    span {
    transform: translateY(-2px)
  }
  }
  span {
    transition: 200ms;
  }
  

`
