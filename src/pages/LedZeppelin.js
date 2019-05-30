import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'

class LedZeppelin extends Component {
  render() {
    return (
      <>
        <h1>Led Zeppelin!</h1>
        <iframe
          className="center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HQmmM_qwG4k"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>This is one of the songs that I heard as a child that inspired me to play guitar for the rest of my life.</p>
        <HomeButton/>
      </>
    )
  }
}

export default LedZeppelin
