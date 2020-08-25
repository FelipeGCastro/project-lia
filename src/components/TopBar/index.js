import React, { useEffect, useState } from 'react'

import { ContainerWrap, Container, NavItem } from './styles'

function TopBar () {
  const [currentScrollHeight, setCurrentScrollHeight] = useState(1)
  const opacity = Math.max(currentScrollHeight / 500, 0)
  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50
      if (currentScrollHeight !== newScrollHeight) {
        setCurrentScrollHeight(newScrollHeight)
      }
    }
  })
  return (
    <ContainerWrap>
      <Container style={{ opacity }} />
      <NavItem><span>Entrar</span></NavItem>
    </ContainerWrap>
  )
}

export default TopBar
