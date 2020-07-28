import React, { useState, useEffect, useCallback } from 'react'

import {
  Container,
  PlayerScreen,
  TextContainer,
  DrawContainer,
  ItemText,
  LeftArrow,
  RightArrow
} from './styles'
import { useParams } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { PlayerOptions } from 'src/components'
import { STORIES, RIGHT_ARROW_KEY, LEFT_ARROW_KEY } from 'src/constants'
import { FadeIn } from 'src/styles'

function PlayerStories () {
  const [index, setIndex] = useState(0)
  const [story, setStory] = useState([])
  const { id } = useParams()

  const nextItem = useCallback(() => {
    setIndex(prev => prev === (story.length - 1) ? prev : prev + 1)
  }, [story])
  const lastItem = useCallback(() => setIndex(prev => prev === 0 ? 0 : prev - 1), [])

  useEffect(() => {
    setStory(STORIES[id])

    const handleNextQuestion = (event) => {
      if (event.keyCode === RIGHT_ARROW_KEY) {
        nextItem()
      }
      if (event.keyCode === LEFT_ARROW_KEY) {
        lastItem()
      }
    }
    document.addEventListener('keydown', handleNextQuestion, false)
    return () => {
      document.removeEventListener('keydown', handleNextQuestion, false)
    }
  }, [id, nextItem, lastItem])
  return !!story[0] && (
    <Container>
      <PlayerScreen>
        <PlayerOptions />
        {isMobile && (
          <>
            <LeftArrow onClick={lastItem} />
            <RightArrow onClick={nextItem} />
          </>
        )}
        <TextContainer>
          {story[index].text && (
            <FadeIn>
              <ItemText>{story[index].text}</ItemText>
            </FadeIn>
          )}
        </TextContainer>
        <DrawContainer>
          <img
            src={story[index].image}
            alt={story[index].text}
          />
        </DrawContainer>
      </PlayerScreen>
      {/* <Link to='/'>Home</Link> */}
    </Container>
  )
}

export default PlayerStories
