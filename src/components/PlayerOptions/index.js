import React, { useState } from 'react'

import {
  Container,
  IconInfo,
  IconHome,
  ModalContainer,
  IconClose,
  IconLeft,
  IconRight,
  IconSpace
} from './styles'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Mobile } from 'src/components/'

function PlayerOptions () {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
      <Container>
        <Link to='/'>
          <IconHome size='44' color='#fff' />
        </Link>
        <div onClick={() => setIsVisible(true)}>
          <IconInfo size='40' color='#fff' />
        </div>
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
                <h3>Pressione as laterais para poder ir e voltar nas perguntas</h3>
              </>
            )
            : (
              <>
                <div>
                  <IconLeft size='55' color='#666' />
                  <IconRight size='55' color='#666' />
                </div>
                <h3>Setas para passar ou voltar nas Perguntas</h3>
                <IconSpace size='55' color='#666' />
                <h3>Espaço para mostrar Resposta</h3>
              </>
            )}

        </ModalContainer>
      )}
    </>
  )
}

export default PlayerOptions
