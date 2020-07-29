import React from 'react'
import { Link } from 'react-router-dom'
import { Container, CardsContainer, LogoImage, ContentCard } from './styles'
import { ReactComponent as Logo } from 'src/assets/Logo.svg'
import Baby from 'src/assets/littleBaby.svg'
import { isMobile } from 'react-device-detect'
import Cross from 'src/assets/cross.svg'
import HandsPraying from 'src/assets/handsPraying.svg'
function Home () {
  return (
    <Container>
      <LogoImage isMobile={isMobile}>
        <Logo />
      </LogoImage>
      <CardsContainer>
        <Link to='/player/2'>
          <ContentCard isMobile={isMobile} className='yellowCard'>
            <img src={Baby} alt='Baby' />
            <span>Baby Catecismo</span>
          </ContentCard>
        </Link>
        <Link to='/player/1'>
          <ContentCard isMobile={isMobile} className='greenCard'>
            <img src={Cross} alt='Cruz' />
            <span> Breve Catecismo de Westminster</span>
          </ContentCard>
        </Link>
        <Link to='/stories/1'>
          <ContentCard isMobile={isMobile} className='blueCard'>
            <img src={HandsPraying} alt='Oração' />
            <span>Oração do Pai Nosso</span>
          </ContentCard>
        </Link>
      </CardsContainer>
    </Container>
  )
}

export default Home
