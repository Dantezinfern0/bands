import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HomeButton extends Component {
  render() {
    return (
      <>
        <Link className="center"  to="/">Go Home</Link>
      </>
    )
  }
}

export default HomeButton
