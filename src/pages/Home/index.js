import React from 'react'
import { Link } from 'react-router-dom'
import { Container, CardsContainer, LogoImage, ContentCard } from './styles'
import Logo from 'src/assets/Logo.svg'
import Baby from 'src/assets/littleBaby.svg'
import Cross from 'src/assets/cross.svg'
function Home () {
  return (
    <Container>
      <LogoImage src={Logo} />
      <CardsContainer>
        <Link to='/player/2'>
          <ContentCard className='yellowCard'>
            <img src={Baby} />
            <span>Baby Catecismo</span>
          </ContentCard>
        </Link>
        <Link to='/player/1'>
          <ContentCard className='greenCard'>
            <img src={Cross} />
            <span> Breve Catecismo de Westminster</span>
          </ContentCard>
        </Link>
      </CardsContainer>
    </Container>
  )
}

export default Home
