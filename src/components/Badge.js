import React, { Component } from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200" alt="Avatar"/>
          <h1>Aaron<br/>Isaacs</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Full Stack Developer</h3>
          <div>@isaacs_ing</div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge