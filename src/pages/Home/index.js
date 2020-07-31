import React from 'react'
import { Link } from 'react-router-dom'
import { Container, CardsContainer, LogoImage, ContentCard } from './styles'
import { ReactComponent as Logo } from 'src/assets/Logo.svg'
import Baby from 'src/assets/littleBaby.svg'
import { isMobile } from 'react-device-detect'
import Cross from 'src/assets/cross.svg'
import HandsPraying from 'src/assets/handsPraying.svg'
import feather from 'src/assets/feather.svg'
import babyKing from 'src/assets/babyKing.svg'
import bible from 'src/assets/bible.svg'

const menuList = [
  { link: '/player/2', colorCard: 'yellowCard', img: Baby, alt: 'Baby', title: 'Baby Catecismo' },
  { link: '/player/1', colorCard: 'greenCard', img: Cross, alt: 'Cruz', title: 'Breve Catecismo de Westminster' },
  { link: '/stories/1', colorCard: 'blueCard', img: HandsPraying, alt: 'Oração', title: 'Oração do Pai Nosso' },
  { link: '/stories/2', colorCard: 'browCard', img: feather, alt: 'Credo', title: 'Credo Apostólico' },
  { link: '/stories/3', colorCard: 'redCard', img: babyKing, alt: 'Bebê Rei', title: 'Jesus Homem e Deus' },
  { link: '/stories/4', colorCard: 'purpleCard', img: bible, alt: 'Bíblia', title: 'A Bíblia não erra' }
]

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
        {menuList.map(renderItem)}
      </CardsContainer>
    </Container>
  )
}

export default Home
