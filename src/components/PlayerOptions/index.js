import React, { useState } from 'react'

import {
  Container,
  IconInfo,
  IconHome,
  IconMenu,
  ModalContainer,
  IconMenuClose,
  IconList,
  IconClose,
  IconLeft,
  IconRight,
  IconSpace,
  IconContainer,
  LinkContainer
} from './styles'
import { isMobile } from 'react-device-detect'
import { Mobile } from 'src/components/'

function PlayerOptions ({ showAnswers, isStory }) {
  const [isVisible, setIsVisible] = useState(true)
  const [expanded, setExpaded] = useState(false)
  function handleExpandButton () {
    setExpaded(!expanded)
    setTimeout(() => {
      setExpaded(prev => false)
    }, 3000)
  }
  return (
    <>
      <Container expanded={expanded}>
        <IconContainer onClick={handleExpandButton}>
          {expanded ? <IconMenuClose size='40' color='#fff' /> : <IconMenu size='44' color='#fff' />}
        </IconContainer>
        {!!expanded && (
          <>
            <LinkContainer to='/'>
              <IconHome size='30' color='#fff' />
              <span>Home</span>
            </LinkContainer>
            <IconContainer onClick={() => setIsVisible(true)}>
              <IconInfo size='30' color='#fff' />
              <span>Info</span>
            </IconContainer>
            <IconContainer onClick={() => showAnswers(true)}>
              <IconList size='30' color='#fff' />
              <span>Respostas</span>
            </IconContainer>
          </>
        )}
      </Container>
      {isVisible && (
        <ModalContainer>
          <div onClick={() => setIsVisible(false)}>
            <IconClose size='44' color='#666' />
          </div>
          {isMobile
            ? (
              <>
                <Mobile
                  LeftComponent={IconLeft}
                  RightComponent={IconRight}
                />
                <h3>Pressione as laterais para poder ir e voltar</h3>
              </>
            )
            : (
              <>
                <div>
                  <IconLeft size='55' color='#666' />
                  <IconRight size='55' color='#666' />
                </div>
                <h3>Setas do teclado para passar ou voltar</h3>
                {!isStory &&
                  <>
                    <IconSpace size='55' color='#666' />
                    <h3>Espaço para mostrar Resposta</h3>
                  </>}
              </>
            )}

        </ModalContainer>
      )}
    </>
  )
}

export default PlayerOptions
