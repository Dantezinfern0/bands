import React, { Component } from 'react'

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
      </>
    )
  }
}

export default LedZeppelin
