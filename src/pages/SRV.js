import React, { Component } from 'react'

class SRV extends Component {
  render() {
    return (
      <>
        <h1>Stevie Ray Vaughn!</h1>
        <iframe
          className="center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n6tU2G_Av7o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </>
    )
  }
}

export default SRV
