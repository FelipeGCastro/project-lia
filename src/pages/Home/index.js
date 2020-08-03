import React from 'react'
import { Link } from 'react-router-dom'
import { Container, CardsContainer, LogoImage, ContentCard } from './styles'
import { ReactComponent as Logo } from 'src/assets/Logo.svg'
import { isMobile } from 'react-device-detect'
import { MENU_LIST } from 'src/constants'

function Home () {
  function renderItem (item) {
    return (
      <Link to={item.link}>
        <ContentCard isMobile={isMobile} className={item.colorCard}>
          <img src={item.img} alt={item.alt} />
          <span>{item.title}</span>
        </ContentCard>
      </Link>
    )
  }
  return (
    <Container>
      <LogoImage isMobile={isMobile}>
        <Logo />
      </LogoImage>
      <CardsContainer>
        {MENU_LIST.map(renderItem)}
      </CardsContainer>
    </Container>
  )
}

export default Home
