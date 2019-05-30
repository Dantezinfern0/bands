import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SrayV from '../pics/SRV.jpg'
import LedZ from '../pics/Led-Zeppelin-Logo.jpg'
import PinkF from '../pics/pink-floyd.png'

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>_Dante's Favorite Bands_</h1>

        <section className="flex-me">
          <img className="center" src={LedZ} />
          <p>
            Led Zeppelin is a rock and roll band that used classic blues licks
            and distorted guitar sound with a rock beat to create a new type of
            music that had never been heard.
          </p>
          <Link className="bottom-space" to="/ledzeppelin">
            Led Zeppelin
          </Link>
          <img className="center" src={SrayV} />
          <p>
            Stevie Ray Vaughn was one of the best blues guitar players of all
            time. He tragically died in a helicopter accident in the early
            1980's but his music will live on and inspire people for years to
            come.
          </p>
          <Link className="bottom-space" to="/srv">
            Stevie Ray Vaughn
          </Link>
          <img className="center" src={PinkF} />
          <p>
            Pink Floyd's music could be classified as rock but it wanders. The
            best part about listening to them is the guitar solos sound like
            someone is 'singing the guitar' and their transitions are seemless.
          </p>
          <Link className="bottom-space" to="/pinkfloyd">
            Pink Floyd
          </Link>
        </section>
      </>
    )
  }
}

export default HomePage
