import React from 'react'

import { ModalContainer, ContentContainer, QuestionNumber, IconClose } from './styles'

function QuestionsList ({
  questionsAmount,
  isVisible,
  setIndex,
  index,
  setIsVisible
}) {
  const selectIndex = (index) => {
    setIsVisible(false)
    setIndex(index)
  }
  const renderItems = () => {
    const items = []
    for (let index = 1; index <= questionsAmount; index++) {
      items.push(index)
    }
    return items.map(i => (
      <QuestionNumber
        selected={(index + 1) === i}
        onClick={() => selectIndex(i - 1)}
        key={i}
      >{i}
      </QuestionNumber>
    ))
  }
  return isVisible ? (
    <ModalContainer>
      <div onClick={() => setIsVisible(false)}>
        <IconClose size='44' color='#666' />
      </div>
      <ContentContainer>
        {renderItems()}
      </ContentContainer>
    </ModalContainer>
  ) : null
}

export default QuestionsList
