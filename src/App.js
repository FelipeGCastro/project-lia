import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'src/pages/Home'
import Player from 'src/pages/PlayerQuestions'
import PlayerStories from 'src/pages/PlayerStories'
import GlobalStyle from 'src/styles/global'

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/player/:id' component={Player} />
          <Route path='/stories/:id' component={PlayerStories} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
