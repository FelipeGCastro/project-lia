import React, { useState, useEffect, useCallback } from 'react'
import {
  Container,
  PlayerScreen,
  Question,
  Response,
  QuestionNumber,
  TextContainer,
  DrawContainer,
  LeftArrow,
  RightArrow,
  IconArrowDown
} from './styles'
import { useParams } from 'react-router-dom'
import {
  CATECHISMS,
  ESPACE_KEY,
  RIGHT_ARROW_KEY,
  LEFT_ARROW_KEY
} from 'src/constants'
import { isMobile } from 'react-device-detect'
import { PlayerOptions, QuestionsList, Image} from 'src/components'
import { FadeIn } from 'src/styles'

function Player () {
  const [responseVisible, setResponseVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [isVertical, setIsVertical] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [catechism, setCatechism] = useState([])
  const { id } = useParams()

  useEffect(() => {
    setIsVertical(screenHeight > screenWidth)
  }, [screenHeight, screenWidth])

  const getWidth = () => window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

  const getHeight = () => window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

  const nextQuestion = useCallback(() => {
    console.log(catechism)
    setIndex(prev => prev === (catechism.length - 1) ? prev : prev + 1)
  }, [catechism])

  useEffect(() => {
    setCatechism(CATECHISMS[id])
    setIsVertical(screenHeight > screenWidth)
    const resizeListener = () => {
      // change width from the state object
      setScreenWidth(getWidth())
      setScreenHeight(getHeight())
    }
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
    document.addEventListener('keydown', handleNextQuestion, false)
    window.addEventListener('resize', resizeListener)
    return () => {
      document.removeEventListener('keydown', handleNextQuestion, false)
      window.removeEventListener('resize', resizeListener)
    }
  }, [id, nextQuestion, screenHeight, screenWidth])

  const lastQuestion = () => setIndex(prev => prev === 0 ? 0 : prev - 1)

  useEffect(() => {
    setResponseVisible(false)
  }, [index])

  useEffect(() => {
    setQuestion(true)
  }, [question])

  return !!catechism[0] && (
    <Container>
      <PlayerScreen vertical={isVertical}>
        <PlayerOptions showAnswers={setIsVisible} />
        <QuestionsList setIndex={setIndex} index={index} questionsAmount={catechism.length} isVisible={isVisible} setIsVisible={setIsVisible} />
        {isMobile && (
          <>
            <LeftArrow onClick={lastQuestion} />
            <RightArrow onClick={nextQuestion} />
          </>
        )}
        <TextContainer>
          {catechism && (
            <FadeIn>
              <QuestionNumber onClick={() => setIsVisible(true)}>Pergunta {catechism[index].questionNumber}<IconArrowDown color='#606060' /></QuestionNumber>
              <Question>{catechism[index].question}</Question>
            </FadeIn>
          )}
          {responseVisible ? (
            <FadeIn>
              <Response>{catechism[index].answer}</Response>
            </FadeIn>)
            : <button onClick={() => setResponseVisible(true)}>Ver Resposta</button>}
        </TextContainer>
        <DrawContainer>
          <Image src={catechism[index].image} />
        </DrawContainer>
      </PlayerScreen>
      {/* <Link to='/'>Home</Link> */}
    </Container>
  )
}

export default Player
