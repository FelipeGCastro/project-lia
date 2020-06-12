import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
function Home () {
  return (
    <Container>
      <h1>Projeto Lia</h1>

      <Link to='/player'>
        <div className='links'>Breve Catecismo de Westminster</div>
      </Link>
    </Container>
  )
}

export default Home
