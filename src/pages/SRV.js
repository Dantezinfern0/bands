import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'

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
        <p>
          This is one of Stevie's songs that has been iconic to his style of
          playing and his original tone. Copied by many other guitarists trying
          to make their name in the world, this music will never grow old.
        </p>
        <HomeButton />
      </>
    )
  }
}

export default SRV
