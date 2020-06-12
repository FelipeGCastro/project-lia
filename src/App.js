import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/'
import Player from './pages/Player/'
import GlobalStyle from './styles/global'

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/player' component={Player} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
