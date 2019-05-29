import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LedZeppelin from './pages/LedZeppelin'
import PinkFloyd from './pages/PinkFloyd'
import SRV from './pages/SRV'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ledzeppelin" exact component={LedZeppelin} />
          <Route path="/pinkfloyd" exact component={PinkFloyd} />
          <Route path="/srv" exact component={SRV} />
        </Switch>
      </Router>
    )
  }
}

export default App
