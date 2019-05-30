import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'

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
        <p>
          This is one of their songs that represents their style. 'The Dark side
          of Oz' is a cool match up between the Dark Side Of The Moon album and
          the movie the Wizard Of Oz. If you have never seen it then you should
          really check it out.
        </p>
        <HomeButton />
      </>
    )
  }
}

export default PinkFloyd
