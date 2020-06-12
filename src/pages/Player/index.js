import React, { useState, useEffect, useCallback } from 'react'

import {
  Container,
  PlayerScreen,
  Question,
  Response,
  QuestionNumber,
  TextContainer,
  DrawContainer,
  FadeIn,
  LeftArrow,
  RightArrow
} from './styles'
// import { Link } from 'react-router-dom'
import shortCatechism from 'src/constants/shortCatechism'
import { isMobile } from 'react-device-detect'
import { PlayerOptions } from 'src/components/'

const ESPACE_KEY = 32
const RIGHT_ARROW_KEY = 39
const LEFT_ARROW_KEY = 37

function Player () {
  const [responseVisible, setResponseVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [isVertical, setIsVertical] = useState(false)
  useEffect(() => {
    document.addEventListener('keydown', handleNextQuestion, false)
    setIsVertical(screenHeight > screenWidth)

    const resizeListener = () => {
      // change width from the state object
      setScreenWidth(getWidth())
      setScreenHeight(getHeight())
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      document.removeEventListener('keydown', handleNextQuestion, false)
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  useEffect(() => {
    setIsVertical(screenHeight > screenWidth)
  }, [screenHeight, screenWidth])

  const getWidth = () => window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

  const getHeight = () => window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

  const handleNextQuestion = (event) => {
    if (event.keyCode === RIGHT_ARROW_KEY) {
      nextQuestion()
      setQuestion(false)
    }
    if (event.keyCode === ESPACE_KEY) {
      setResponseVisible(true)
    }
    if (event.keyCode === LEFT_ARROW_KEY) {
      lastQuestion()
      setQuestion(false)
    }
  }

  const nextQuestion = useCallback(() => {
    setIndex(prev => prev === (shortCatechism.length - 1) ? shortCatechism.length - 1 : prev + 1)
  }, [shortCatechism])
  const lastQuestion = () => setIndex(prev => prev === 0 ? 0 : prev - 1)

  useEffect(() => {
    setResponseVisible(false)
  }, [index])

  useEffect(() => {
    setQuestion(true)
  }, [question])

  return (
    <Container>
      <PlayerScreen vertical={isVertical}>
        <PlayerOptions />
        {isMobile && (
          <>
            <LeftArrow onClick={lastQuestion} />
            <RightArrow onClick={nextQuestion} />
          </>
        )}
        <TextContainer>
          {question && (
            <FadeIn>
              <QuestionNumber>Pergunta {shortCatechism[index].questionNumber}</QuestionNumber>
              <Question>{shortCatechism[index].question}</Question>
            </FadeIn>
          )}
          {responseVisible ? (
            <FadeIn>
              <Response>{shortCatechism[index].answer}</Response>
            </FadeIn>)
            : <button onClick={() => setResponseVisible(true)}>Ver Resposta</button>}
        </TextContainer>
        <DrawContainer>
          <img
            src='https://instagram.flis5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/74898962_450912375808678_2198509075038108810_n.jpg?_nc_ht=instagram.flis5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=lJ192AztI4sAX-eagak&oh=07c953d349532c7670fb4640c66349a9&oe=5F0C5DEE'
            alt='draw'
          />
        </DrawContainer>
      </PlayerScreen>
      {/* <Link to='/'>Home</Link> */}
    </Container>
  )
}

export default Player