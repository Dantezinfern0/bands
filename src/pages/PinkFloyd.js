import React, { Component } from 'react'

class PinkFloyd extends Component {
  render() {
    return (
      <>
        <h1>Pink Floyd!</h1>
        <iframe
          className="center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cpbbuaIA3Ds"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </>
    )
  }
}

export default PinkFloyd
