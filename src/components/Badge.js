import React, { Component } from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?id=identicon" alt="Avatar"/>
          <h1>Aaron <br/> Isaacs</h1>
        </div>
        <div>
          <p>Full Stack Developer</p>
          <p>@isaacs_ing</p>
        </div>
        <div>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge