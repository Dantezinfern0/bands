import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SrayV from '../pics/SRV.jpg'
import LedZ from '../pics/Led-Zeppelin-Logo.jpg'
import PinkF from '../pics/pink-floyd.png'

// const fBands = [{
//   name: "Led Zeppelin",
//   genre: "Rock and Roll",
//   image: "../pics/Led-Zeppelin-Logo-1200x565.jpg"
// },
// { name: "Pink Floyd",
//   genre: "Classic Rock",
//   image: "../pics/pink-floyd.png"},
//   {
//     name: "Stevie Ray Vaughn",
//     genre: "Blues",
//     image: "../pics/SRV.jpg"
//   }
// ]

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>_Dante's Favorite Bands_</h1>

        <section className="flex-me">
          <img className="center" src={LedZ} />
          <Link className="bottom-space" to="/ledzeppelin">Led Zeppelin</Link>
          <img className="center" src={SrayV} />
          <Link className="bottom-space" to="/srv">Stevie Ray Vaughn</Link>
          <img className="center" src={PinkF} />
          <Link className="bottom-space" to="/pinkfloyd">Pink Floyd</Link>
        </section>
      </>
    )
  }
}

export default HomePage
