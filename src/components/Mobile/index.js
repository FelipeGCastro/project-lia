import React from 'react'

import {
  MobileWrapper,
  MobileContainer,
  Left,
  Right
} from './styles'

function Mobile ({ LeftComponent, RightComponent }) {
  return (
    <MobileWrapper>
      <MobileContainer>
        <Left>
          <LeftComponent size='20' color='#fff' />
        </Left>
        <Right>
          <RightComponent size='20' color='#fff' />
        </Right>
      </MobileContainer>
    </MobileWrapper>
  )
}

export default Mobile
